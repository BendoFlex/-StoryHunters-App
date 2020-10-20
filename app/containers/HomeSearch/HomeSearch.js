import React from 'react';
import FilmDetail from '../../components/FilmDetail'
import getSearchedTextFromApi from '../../utils/TMDB'
class HomeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedText: '',
      lastQuery :'',
      films: [],
      results: 20,
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitText = this.onSubmitText.bind(this);
  }

  onChangeText(event) {
    this.setState({ searchedText: event.target.value });
  }

  onSubmitText(event) {
    event.preventDefault();
    const filmsResult = getSearchedTextFromApi(this.state.searchedText)
    
    this.setState(
      {
        searchedText:"",
        lastQuery:this.state.searchedText,
        films: filmsResult
      }
    )
    console.log(this.state.films)
  }

  renderFilms() {
    const item = [];
    const films = this.state.films
    for (film in films) {
      console.log(film)
      item.push(
      <div key={film.id} className="filmCard">
        <p><img src={film.poster_path}/></p>
        <h2>{film.title}</h2>
      </div>
      )
    }
    return(
      <div className="gridFilms" >
        {item}
      </div>
    ) 
  }

  render() {
    return (
      <div id="homeSearch">
        <div className="searchForm">
          <form onSubmit={this.onSubmitText}>
            <label htmlFor="searchedText">
              Chercher un film :
              <input
                type="text"
                name="searchedText"
                value={this.state.searchedText}
                onChange={this.onChangeText}
              />
            </label>
            <input type="submit" name="Rechercher" />
          </form>
        </div>

        <div className="searchResult">
          <div className="wrap">
              {this.renderFilms()}
          </div>
          <FilmDetail/>
        </div>
      </div>
    );
  }
}

export default HomeSearch;
