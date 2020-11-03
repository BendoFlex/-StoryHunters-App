export {API_KEY,DEFAULT_LANG} from '../../config'
//const API_KEY="29ba92f8951f0add3fb6b95ee1a50a2f"
const DEFAULT_LANG=process.env.DEFAULT_LANG

//default export result in a import without {} 
export default function getSearchedTextFromApi (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&languages='+DEFAULT_LANG+'&query='+text;
    return fetch(url,{method: 'GET'})
        .then((response)=> response.json()) // Response.json() = promise ... on la chaine après en l'appelant
        .catch((error)=> console.error(error)); // le retour n'est pas ici mais avant fetch 
       
}