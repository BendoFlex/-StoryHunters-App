import React from 'react';
import LayoutSpaceAround from './LayoutSpaceAround';


export default class Header extends React.Component  {
  constructor(props){
    super(props)
    this.state ={
      toggle : false,
      userName : 'Login'
    }
  }
  authentification(event){
    console.log("authentification")
    console.log(event.target.value)
  }

  render(){
        return (
          <div className="headerMovie">
            <LayoutSpaceAround>
              
                <div className="logo">
                  <img src="https://via.placeholder.com/80" />
                </div>

                <h1>Movie App</h1>

                <nav>
                  <ul>
                    <LayoutSpaceAround>
                      <a href="/"><li>Home</li></a>
                      <a href="/favorites"></a><li>Favoris</li>
                    <a href="/login" onClick={this.authentification}><li>{this.state.userName}</li></a>
                      </LayoutSpaceAround>
                  </ul>
                </nav>
            </LayoutSpaceAround>
          </div>
        );
  }
}
