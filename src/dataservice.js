import axios from 'axios' //npm i axios per installarlo

export default{
    
    /* localStorage mi permette di avere accesso a degli elementi salvati nella cache.
       In questo caso mi creo l'elemento username */
    
    isAuthenticated(){
    return !!localStorage.getItem("username");
    },
    Login(username){
        localStorage.setItem("username",username);
    },
    Logout(){
        localStorage.removeItem("username");
    },

    //prendiamo i pokemon da pokeapi

    getPokemons(offset){  //le chiamate sono asincrone
       return axios.get("https://pokeapi.co/api/v2/pokemon/?offset=" + (offset || 0) ); //restituisce l'elenco dei pokemon, l'offset è l'id o 0

    },

    getPokemon(name){
        return axios.get("https://pokeapi.co/api/v2/pokemon/" + name); //restituisce singolo pokemon in base al nome
    },
    searchPokemon(text){
        if(text.length < 2 || !text){
            //se il valore è minore di 3 o non esiste il testo restituiamo una promive con un array vuoto
            return new Promise(resolve => {
                resolve([]);
            })
        }else{
        return axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000").then(data => {
            //se la string text corrisponde all'inizio del nome del pokemon allora torno l'elemento, indexOf ritorna il primo indice a cui c'è l'elemento passato
            return data.data.results.filter((element => element.name.indexOf(text) == 0)).map(element => element.name);
        });}
    }
}