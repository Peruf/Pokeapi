<template>
  <div class="md-layout md-alignment-center-center">
      <!-- voglio che i pokemon siano una card -->
      <md-card class="md-layout-item" v-if="pokemon">
          <md-card-header>
            <md-card-media md-medium>
                <img :src="pokemon.sprites.front_default"> <!-- url dinamico del pokemon -->
            </md-card-media>
            <md-card-header-text>
                <span class="md-title capitalize nomepkm"><b>{{pokemon.name}}</b></span> <!-- prendo il nome del pokemon -->
            </md-card-header-text>  
          </md-card-header>
          <md-card-content>
              <md-table>
                  <md-table-row>
                    <md-table-cell class="upper"><b>Altezza</b></md-table-cell>
                    <md-table-cell>{{pokemon.height}}</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell class="upper"><b>Peso</b></md-table-cell>
                    <md-table-cell>{{pokemon.weight}}</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell class="upper"><b>Esperienza</b></md-table-cell>
                    <md-table-cell>{{pokemon.base_experience}}</md-table-cell>
                  </md-table-row>
              </md-table>
          </md-card-content>
      </md-card>
  </div>
</template>


<script>
import dataservice from '@/dataservice.js'

export default {
    data: function(){
        return{
            pokemon: null,
        }
    },
    created: function(){
        dataservice.getPokemon(this.$route.params.name).then((data) => {
            this.pokemon = data.data;
        });
    }
}
</script>

<style>

</style>