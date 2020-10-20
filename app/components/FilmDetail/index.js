import React from 'react'
import styled from 'styled-components'


const CenteredElem = styled.div`
 display:flex;
 flex-direction:column;
 align-items :center

`;

export default function FilmDetail()  {
    return(
         <div className="film-detail">
           <CenteredElem>
             <div className="imgDesc">
                <img src="https://via.placeholder.com/300" />
             </div>
            <div className="filmDesc">
              <h1>Titre</h1>
              <p>Année</p>
              <p>Realisateur</p>
              <p>Acteurs principaux</p>
              <p>
                Description de ouf
                izahfpajfozoajfozjpjzojdpzdzjdozajdazodjpozjdj
              </p>
            </div>

            
            </CenteredElem>
          </div>
        ) 
}
