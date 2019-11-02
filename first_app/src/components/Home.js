import React, { Component } from 'react';

export class Home extends Component {

    constructor(props){
      super(props);
      this.state={
        age:props.initialAge,
        homeLink:props.initialLinkName
      };
    }

    onMakeOlder()
    {
      this.setState({age: this.state.age + 3});
    }

    onChangeLink()
    {
      this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event)
    {
      this.setState({
        homeLink:event.target.value
      });

    }
    render() {
      return (
        <div>
          <p>Hi {this.props.fname} {this.props.lname}</p>
          <p>your age is {this.state.age}</p>
          <h4>Hobbies</h4>
          <ul>
          {this.props.user.hobbies.map((hobby,i)=> <li key={i}>{hobby}</li>)}
          </ul>

          {this.props.children}
          
          <button className='btn btn-primary' onClick={()=>this.onMakeOlder()}>make me older</button>
          <br/><br/>
         
          <button className='btn btn-primary' onClick={this.props.greet}>Greet</button>
          <br/><br/>
          <input type='text' value={this.state.homeLink} onChange={(event)=>this.onHandleChange(event)}/>
          <button className='btn btn-primary' onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
        </div>
      );
    }
  }


