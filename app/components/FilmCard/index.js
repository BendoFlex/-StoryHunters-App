import React from 'react'




export default function FilmCard ({film,size}) {
        return(
            <div  className="filmCard">
                <p><img src={`https://image.tmdb.org/t/p/w${size}${film.poster_path}`}/></p>
                <a href={`film/${film.id}`}><h2>{film.title}</h2></a>
            </div>
        )
}