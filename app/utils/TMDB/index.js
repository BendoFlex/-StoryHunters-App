const API_KEY="29ba92f8951f0add3fb6b95ee1a50a2f"
const DEFAULT_LANG="en"

//default export result in a import without {} 
export default function getSearchedTextFromApi (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&languages='+DEFAULT_LANG+'&query='+text;
    return fetch(url)
        .then(response => response.json())
        .then(json =>  json.results) 
        .catch(err => err.message) // le retour n'est pas ici mais avant fetch 

}