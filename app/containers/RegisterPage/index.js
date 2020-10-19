import React from 'react';


class RegisterPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      surname : "",
      name :"",
      age : "",
      email : "",
      password :"",
      passwordConf :""
    }
    this.handleSubmitChange= this.handleSubmitChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange(event){
    const text = event.target.value
    const name = event.target.name
    this.setState({[name] : text }) //conditional state
  }

  handleSubmitChange(event){
    const infoState = ['name','surname','age','email', 'password','passwordConf']
    let hash
    if(this.state.password === this.state.passwordConf){
      for (let i = 0; i < infoState.length; i++){
        let info = infoState[i]
        alert( `${info} = ${this.state[info]}`)
      }
      hash = bcrypt(this.state.password) 
      coon
    }
    else{
       alert("les mots de passes sont différents : try again" )
    }
    event.preventDefault()
    infoState.map( info =>{
      this.setState({[info] :''})
    })
    
  }

  render() {
    return (
      <div id="registerPage">
        <form action="post" onSubmit={this.handleSubmitChange}>
          <h1>Remplissez vos informations</h1>

          <p>
            <label>
              Nom :
              <input type="text" name="surname" value={this.state.surname} onChange={this.handleTextChange} />
            </label>
          </p>

          <p>
            <label>
              Prénom :
              <input type="text" name="name" value={this.state.name} onChange={this.handleTextChange}/>
            </label>
          </p>

          <p>
            <label>
              Age :
              <input type="text" name="age" value={this.state.age} onChange={this.handleTextChange}/>
            </label>
          </p>

          <p>
            <label>
              E-mail :
              <input type="text" name="email" value={this.state.email} onChange={this.handleTextChange} required/>
            </label>
          </p>
          <p>
            <label>
              Mot de Passe :
              <input type="password" name="password" value={this.state.password} onChange={this.handleTextChange} required/>
            </label>
          </p>

          <p>
            <label>
              Confirmation du Mot de Passe :
              <input type="password" name="passwordConf" value={this.state.passwordConf} onChange={this.handleTextChange} required/>
            </label>
          </p>
          <input type="submit" value="S'inscrire" />
        </form>
      </div>
    );
  }
}

export default RegisterPage;
