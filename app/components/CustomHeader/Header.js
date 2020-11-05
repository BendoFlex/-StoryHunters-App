import React from 'react';
import LayoutSpaceAround from './LayoutSpaceAround';
import {googleSignIn}  from '../../functions/Auth'



export default class Header extends React.Component  {
  constructor(props){
    super(props)
    this.state ={
      toggle : false,
      userName : "Login"
    }
    this.authentification=this.authentification.bind(this)

  }

  authentification(){
    googleSignIn()
        .then( (data) => {
                console.log(data)
                this.setState({userName : data.user.displayName})
        })
        .catch((error)=> console.log(error.message))// works!
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
                      <li><button onClick={this.authentification} value="login">{this.state.userName}</button></li>
                    </LayoutSpaceAround>
                  </ul>
                </nav>
            </LayoutSpaceAround>
          </div>
        );
  }
}
