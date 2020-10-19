import React from 'react';
import FilmDetail from '../../components/FilmDetail'

class HomeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedText: '',
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
    alert(`Une recherche a été faite avec ${this.state.searchedText}`);
    event.preventDefault();
    this.setState({searchedText:""})
  }

  renderFilms() {
    const item = [];
    const urlImage ="https://via.placeholder.com/80"
    for (let i = 0; i < this.state.results; i++) {
      item.push(
      <div className="filmCard">
        <p><img src={urlImage}/></p>
        <h2>Titre du film</h2>
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
          <div className="currentFilm">
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

            <div className="imgDesc">
              <img src="https://via.placeholder.com/300" />
            </div>
          </div>
          <FilmDetail/>
        </div>
      </div>
    );
  }
}

export default HomeSearch;
