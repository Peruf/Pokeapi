<template>
  <div class="md-layout md-alignment-center-center">
    <!-- voglio che i pokemon siano una card -->
    <md-card class="md-layout-item" v-if="pokemon">
      <md-card-header class="md-layout md-alignment-center-left">
        <md-card-media md-medium class="md-layout">
          <img :src="pokemon.sprites.front_default" />
          <!-- url dinamico del pokemon -->
        </md-card-media>
        <md-card-header-text>
          <span class="md-title md-layout capitalize">
            <b>{{pokemon.name}}</b>
          </span>
          <!-- prendo il nome del pokemon -->
        </md-card-header-text>
      </md-card-header>
      <md-card-content>
        <md-table>
          <md-table-row>
            <md-table-cell class="upper">
              <b>Altezza</b>
            </md-table-cell>
            <md-table-cell>{{pokemon.height}}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell class="upper">
              <b>Peso</b>
            </md-table-cell>
            <md-table-cell>{{pokemon.weight}}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell class="upper">
              <b>Esperienza</b>
            </md-table-cell>
            <md-table-cell>{{pokemon.base_experience}}</md-table-cell>
          </md-table-row>
        </md-table>
        <br />
        <h3 v-if="stats && stats.total > 0">
          <b>Voti totali:</b>
          {{stats.total}}
          <br />
          <b>Media voti:</b>
          {{stats.avg}}
        </h3>
        <h3 v-if="stats.total == 0 || !stats">Non ci sono ancora voti</h3>
        <span>Mio voto:</span>
        <span v-for="s in [1,2,3,4,5]" :key="s" @click="vote(s)">
          <md-icon>{{(stats.userVote >= s) ? 'star' : 'star_outline' }}</md-icon>
        </span>
				<md-card-content class="red md-subhead" v-if="voted">Hai già votato</md-card-content>
      </md-card-content>
    </md-card>
  </div>
</template>


<script>
import dataservice from "@/dataservice.js";

export default {
  data: function() {
    return {
      pokemon: null,
      stats: {},
      voted: false
    };
  },
  watch: {
    $route: function() {
      this.load();
    }
  },
  created: function() {
    this.load();
  },
  methods: {
    load: function() {
      dataservice.getPokemon(this.$route.params.name).then(data => {
        this.pokemon = data.data;
        dataservice.getVote(this.pokemon.name).then(stats => {
          this.stats = stats;
        });
      });
    },
    vote: function(s) {
      if (this.stats.userVote > 0) {
        this.voted = true;
      } else {
        dataservice.setVote(this.pokemon.name, s).then(() => {
          this.load();
				});
				this.voted = false;
      }
    }
  }
};
</script>

<style>
</style>