import React  from 'react'


class HomeSearch extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            searchedText :"",
            films : [],
            results :20
        }
        this.onChangeText = this.onChangeText.bind(this)
        this.onSubmitText = this.SubmitText.bind(this)
    }

    onChangeText(event){
        this.setState({'searchedText' : event.target.value})
    }

    onSubmitText(event){
        alert("Une recherche a été faite avec "+this.state.searchedText)
        event.preventDefault()
    }


    renderFilms(){
        let item = []

        for(let i = 0; i<this.state.results;i++){
            item.push('<div className="filmCard"><p><img src="https://www.placeholder.com/80"/></p><h2>Titre du film</h2></div>')
        }
    }

    render(){
        return(
            <div id="homeSearch">
                <div className="headerMovie">
                    <div className="logo">
                        <img src="https://www.placeholer.com/50"/>
                    </div>

                    <h1>Movie App</h1>

                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Favoris</li>
                            <li>Login</li>
                        </ul>
                    </nav>
                </div>

                <div className="searchForm">
                    <form onSubmit={this.onSubmitText}>
                        <label htmlFor="searchedText">Chercher un film : 
                            <input type="text" name="searchedText" value={this.state.searchedText} onChange={this.onChangeText}/>
                        </label>
                        <input type="submit" name="Rechercher"/>
                    </form>
                </div>


                <div className="searchResult">
                    <div className="gridFilms">
                        {this.renderFilms()}
                    </div>
                    <div className="currentFilm">
                        <div className="filmDesc">
                            <h1>Titre</h1>
                            <p>Année</p>
                            <p>Realisateur</p>
                            <p>Acteurs principaux</p>
                            <p>Description de ouf izahfpajfozoajfozjpjzojdpzdzjdozajdazodjpozjdj
                            </p>
                        </div>

                        <div className="imgDesc">
                            <img src="https://www.placeholder.com/300"/>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default HomeSearch