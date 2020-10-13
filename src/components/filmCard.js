import React from "react";

class FilmCard extends React.Component {
  render(){
    return(
        <div className="card">
          <div className="film-img">
            <img className="middle-icon" src="https://placeholder.com/150"/>
          </div>
          <div className="film-desc">
            <h1>Movie Title</h1>
            <p>Description</p>
          </div>
        </div>
    )
  }
}

export default FilmCard



