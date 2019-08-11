<template>
    <center>
        <div>
            <h1>MENU</h1>
        </div>

        <router-link to="/events">
            <button class="adminMenuButtons">UPCOMING EVENTS</button>
        </router-link> <br/>
        
        <router-link to="/cases">
            <button class="adminMenuButtons">CASE MANAGEMENT</button>
        </router-link> <br/>
        <router-link to="/volunteers">
            <button class="adminMenuButtons">VOLUNTEERS</button>
        </router-link> <br/>
        <router-link to="/register-volunteer">
            <button class="adminMenuButtons">REGISTER VOLUNTEERS</button>
        </router-link> <br/>
        
    </center>
</template>

<script>
export default {
    methods: {
     
    }
}
</script>

<style>

</style>
