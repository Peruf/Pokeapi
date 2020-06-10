<template>
  <div>
      <md-list>
          <!-- Mi creo la lista dei pokemon dove ogni elemento sarà un link al pokemon e verrà visualizzato il nome-->
          <div v-for="pokemon in pokemons" :key="pokemon.name">
            <!-- ogni pokemon in lista sarà un pulsante per andare alla pagina del singolo pokemon -->
            <md-list-item :to="'/pokemon/' + pokemon.name">
                <span class="capitalize">{{ pokemon.name }}</span>
            </md-list-item>
            <md-divider></md-divider>
          </div>
      </md-list>
      <!-- creo un infinite scroll -->
      <md-button class="md-accent md-fixed" @click="loadMore()">Load more</md-button>
      <md-progress-spinner md-mode="indeterminate" :md-diameter="20" :md-stroke="2" v-if="loading" class="md-accent" style="margin-top:1em;"></md-progress-spinner>
  </div>
</template>

<script>
import dataservice from '@/dataservice.js'

export default {
    data: function(){
        //ritorno un array di pokemon, gli elementi saranno presi da dataservice.js
        return {
            pokemons: [],
            offset: 0,
            loading: false,
        }
    },
    created: function(){
        //quando si crea la pagina faccio una promise per recuperare e popolare la lista pokemons
        dataservice.getPokemons().then((data) => {
            this.pokemons = data.data.results;
            console.log(data);
        });
    },
    methods: {
        loadMore(){
            this.loading = true; //faccio apparire lo spinner
            //aumento l'offset di 20 e richiamo la funzione getPokemons per vedere altri pokemon
            this.offset += 20;
            dataservice.getPokemons(this.offset).then((data) => {
            this.pokemons = this.pokemons.concat(data.data.results); //concateno i pokemon nuovi a quelli già caricati
            this.loading = false; //tolgo spinner
        });
        }
    }
}
</script>

<style>

</style>