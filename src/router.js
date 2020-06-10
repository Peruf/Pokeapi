import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import Vue from 'vue'
import Login from './pages/login.vue'
import PokemonList from './pages/pokemonlist.vue'
import Pokemon from './pages/pokemon.vue'
//import dataservice from '@/dataservice.js'

Vue.use(VueRouter)
Vue.use(VueMaterial)

const linkActiveClass = 'my-link-active-class'

// pass custom class to Vue Material
Vue.material.router.linkActiveClass = linkActiveClass




export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'PokemonList',
            component: PokemonList
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/pokemon/:name',
            name: 'Pokemon',
            component: Pokemon
        }
    ]
})

