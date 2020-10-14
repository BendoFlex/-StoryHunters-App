import React from 'react'


class FilmSearch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value : "",
      films : [],
      result : 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this) //controlled component
  }

  handleSubmit(event){
    alert("fetch data from api : "+this.state.value)
    this.setState({
      'value': "",
      'result' : 20
    })
    event.preventDefault()
  }  

  handleChange(event){
    this.setState({'value': event.target.value})
  } 
  
  renderFilms(){
     const item = []
      for ( let i= 0; i<this.state.result;i++){
        item.push(<div className="film_card"><h1 key={i} className="title">Film {i+1}</h1></div>)
      }
      return(
        <div id="film_result">
          {item}
        </div>
      )
  }

  render(){
    return(
      <div id="main">
        <form id="search" onSubmit={this.handleSubmit}>
          <label>Search Film :
            <input type="text" name="search" value={this.state.value} id="search" onChange={ this.handleChange}/>
          </label>
          <input type="submit" name="chercher"/>
        </form>
        {this.renderFilms()}
      </div>
      
    )
  }
}

export default FilmSearch


 