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

</style>
