import React from 'react'

export default class FilmCard extends React.Component {
    render(){
        return(
            <div  className="filmCard">
                <p><img src={"https://image.tmdb.org/t/p/w185/"+this.props.film.poster_path}/></p>
                <h2>{this.props.film.title}</h2>
            </div>
        )
    }
}