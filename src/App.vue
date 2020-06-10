<template>
  <div id="app">
    <md-app>
      <navbar slot="md-app-toolbar"></navbar>
      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    navbar: navbar,
  }
}
</script>

<style>

.capitalize {
  text-transform: capitalize;
}
.upper{
  text-transform: uppercase;
}
.nomepkm{
  padding: 1em;
  padding-top: 2em;
}
</style>
