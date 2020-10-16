import React from 'react';

class LoginPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email : "",
      password :''
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleConnexion = this.handleConnexion.bind(this)
    
  }

  handleTextChange(event){
    const text = event.target.value
    if(event.target.name === "email"){
      this.setState({email : text})
    }
    else {
      this.setState({password : text})
    }
    
  }

  handleConnexion(event){
    alert("captured email "+this.state.email+" and password "+this.state.password)
    event.preventDefault();
  }


  render() {
    return (
      <div id="loginPage">
        <form onSubmit={this.handleConnexion}>
          <h1>Se connecter</h1>
          <p>
            <label>
              E-mail :
              <input type="text" name="email" value={this.state.email} onChange={this.handleTextChange} />
            </label>
          </p>
          <p>
            <label>
              Password :
              <input type="password" name="password" value={this.status.password} onChange={this.handleTextChange} />
            </label>
          </p>

          <p>
            <input type="submit" value="Se connecter" />
          </p>
        </form>

        <div className="button-test">
          <h1>Pas encore inscrit ?</h1>
          <a href="/register">
            <p>S"inscrire</p>
          </a>
        </div>
      </div>
    );
  }
}

export default LoginPage;
