import {API_KEY, DEFAULT_LANG} from '.env'


export default function getSearchedTextFromApi (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&languages='+DEFAULT_LANG+'&query='+text;
    fetch(url)
        .then(res => { return res.json()}) // then(function(res){return res}) Att retourne une promise
        .err(err => { return err.message})

}