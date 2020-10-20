import React from 'react';
import FilmDetail from '../../components/FilmDetail'
import FilmCard from '../../components/FilmCard'
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
    this._LoadFilms = this._LoadFilms.bind(this);
  }

  onChangeText(event) {
    this.setState({ searchedText: event.target.value });
  }

  _LoadFilms(event) {
    event.preventDefault();
    getSearchedTextFromApi(this.state.searchedText).then(data => {
      this.setState({
        searchedText:"",
        lastQuery:this.state.searchedText,
        films: data.results
      })
    })
    console.log(this.state.films)
  }




  render() {
    const films = this.state.films
    return(
      <div id="homeSearch">
        <div className="searchForm">
          <form onSubmit={this._LoadFilms}>
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
              {films.map((film, index) => {
                return <FilmCard key={index} film={film}/>
              })}
          </div>
          <FilmDetail/>
        </div>
      </div>
    );
  }
}

const data = [
   {
    title :"bendo the movie",
    poster_path : "https://via.placeholder.com/100"
   },
  {
    title :"bendo the movie 2",
    poster_path : "https://via.placeholder.com/100"
  }
]

export default HomeSearch;
