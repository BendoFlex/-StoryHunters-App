import React from 'react';

class LoginPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email : "",
      password :""
    }
    this.onChangeText = this.onChangeText.bind(this)
    this.onSubmitText = this.onSubmitText.bind(this) 
  }

  onChangeText(event){
    let text = event.target.value
    let name = event.target.name
    this.setState({[name] : text})
  }

   onSubmitText(event){
     const {email, password} = this.state
    alert("captured email "+email+" and password "+password)
    event.preventDefault();
    this.setState({[email] : ''})
    this.setState({[password] : ''})
    
  }


  render() {
    return (
      <div id="loginPage">
        <form onSubmit={this.onSubmitText}>
          <h1>Se connecter</h1>
          <p>
            <label>
              E-mail :
              <input type="text" name="email" value={this.state.email} onChange={this.onChangeText} />
            </label>
          </p>
          <p>
            <label>
              Password :
              <input type="password" name="password" value={this.state.password} onChange={this.onChangeText}/>
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
