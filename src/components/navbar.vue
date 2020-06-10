<template>
    <md-app-toolbar class="md-primary md-layout">
        <router-link to="/"><span class="md-title">Gotta catch 'em all!</span> </router-link>
        <!--<md-button to="/login" class="md-primary md-flat">Login</md-button>-->
        <div class="md-layout-item"></div>
        <div class="md-toolbar-section-end">
            <md-autocomplete class="md-layout-item search" md-layout="box" v-model="SelectedPokemon" :md-options="searchOptions" @md-changed="search" @md-selected="go">
                <label class="md-accent">Search...</label>
            </md-autocomplete>
            <md-button @click="logout" class="md-layout-item-15 md-icon-button icon"><md-icon class="md-layout md-alignment-top-right">exit_to_app</md-icon></md-button>
        </div>
    </md-app-toolbar>  
</template>

<script>
    import dataservice from '@/dataservice.js'

    export default {
        name: 'Navbar',
        data: function() {
            return {
                showNav: false,
                SelectedPokemon: null,
                searchOptions: [],
            }
        },
        methods:{
            logout: function(){
                dataservice.Logout();
            },
            search: function(text){
                this.searchOptions = dataservice.searchPokemon(text.toLowerCase());
            },
            go: function(found){
                this.$router.push({ path: '/pokemon/' + found});
            }
        },
        
    }
</script>

<style scoped>
.search{
    max-width: 250px;
}
</style>