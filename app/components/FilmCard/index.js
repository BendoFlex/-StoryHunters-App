import React from 'react'




export default function FilmCard ({film}) {
        return(
            <div  className="filmCard">
                <p><img src={"https://image.tmdb.org/t/p/w100/"+film.poster_path}/></p>
                <h2>{film.title}</h2>
            </div>
        )
}