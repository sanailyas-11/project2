import React from 'react';

export const Header= (props)=>{
    
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <div className='navbar-header'>
                        <ul className='nav navbar-nav'>
                            <li><a href='#'>{props.HomeLink}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    
};