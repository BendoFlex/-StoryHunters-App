import React from 'react'
import FilmCard from './FilmCard'

class FilmSearch extends React.Component {
  render(){
    return(
      <div id="search">
        <label>Search Film</label>
        <p><input type="text" name="search" id="search"/></p>
        <p><input type="submit"/></p>
      </div>
    )
  }
}

export default FilmSearch


 