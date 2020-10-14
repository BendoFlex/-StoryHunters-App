import React from 'react'


class FilmSearch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value : ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    alert("fetch data from api : "+this.state.value)
    event.preventDefault()
  }  

  handleChange(event){
    this.setState({'value': event.target.value})
  }  

  render(){
    return(
      <form id="search" onSubmit={this.handleSubmit}>
        <label>Search Film :
          <input type="text" name="search" value={this.state.value} id="search" onChange={ this.handleChange}/>
        </label>
        <input type="submit" name="chercher"/>
      </form>
    )
  }
}

export default FilmSearch


 