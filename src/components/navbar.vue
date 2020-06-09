<template>
    <md-app-toolbar class="md-primary">
        <span class="md-title">Gotta catch 'em all!</span> 
        <md-button to="/login" class="md-primary">Login</md-button>
    </md-app-toolbar>  
</template>

<script>
    export default {
        name: 'Navbar',
        data: function() {
            return {
                showNav: false
            }
        }
    }
</script>
