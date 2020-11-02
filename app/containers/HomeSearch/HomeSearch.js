import React from 'react';
import FilmDetail from '../../components/FilmDetail'
import FilmCard from '../../components/FilmCard'
import getSearchedTextFromApi from '../../utils/TMDB'
import styled from 'styled-components'

const CenteredElem = styled.div`
  display:flex;
  justify-content:center;
`;

const MainWrapper = styled.div`
  margin : 5rem 0 5rem 0;
`;

const RowAround = styled(CenteredElem)`
  justify-content:space-around;
`;

const Grid = styled.div`
  display:flex;
  flex:1;
  flex-wrap:wrap
`




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
      },
      ()=>{
        console.log("films")
        console.log(this.state.films)
      })
    })
    console.log("films")
    console.log(this.state.films)
  }




  render() {
    const films = this.state.films
    return(
      <MainWrapper>
      <div id="homeSearch">
        <CenteredElem>
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
        </CenteredElem>

        <div className="searchResult">
          <RowAround>
              <div className="wrap-grid">
                <Grid>
                  {films.map((film, index) => {
                    return <FilmCard key={index} film={film} size={200}/>
                  })}
                </Grid>
              </div>
          </RowAround>
        </div>

      </div>
      </MainWrapper>
    );
  }
}

export default HomeSearch;
