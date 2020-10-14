import React from 'react'


class FilmSearch extends React.Component {
  constructor(props){
    super(props)
  }

  

  render(){
    return(
      <form id="search" onSubmit={this.handleSubmit}>
        <label>Search Film :
          <input type="text" name="search" id="search"/>
        </label>
        <input type="submit" name="chercher"/>
      </form>
    )
  }
}

export default FilmSearch


 