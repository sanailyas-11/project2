import React from 'react';

import './App.css';
import {Home} from './components/Home';
import {Header} from './components/Header';
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      homeLink:'Home'
    };
  }

  onChangeLink(newName) 
  {
    this.setState({homeLink:newName});
  }

  onGreet(){
    alert('hello!');
  }

  render() {
    var user={
      name:'mahjabeen', 
      hobbies:['sports','reading']
    };
    return (
      


      <div className="container">
        <div className="row">
          <div className='col-xs-10 col-xs-offset-1'>
            <Header HomeLink={this.state.homeLink}/>

          </div>
        </div>

        <div className="row">
          <div className='col-xs-10 col-xs-offset-1'>
            <Home fname={'sana'} 
            lname={'ilyas'} 
            greet={this.onGreet} 
            user={user}
             initialAge={21} 
             changeLink={this.onChangeLink.bind(this)}
             initialLinkName={this.state.homeLink}>

              <p>paragraph in Home</p>
            </Home>

          </div>
        </div>
        
  
      </div>
    );
  }
}

export default App;
