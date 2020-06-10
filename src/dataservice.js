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
    }
}