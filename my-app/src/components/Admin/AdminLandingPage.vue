<template>
    <center>
                    <div>
                        <h1>MENU</h1>
                    </div>

                    <button class="adminMenuButtons"
                    v-on:click="viewEvents"
                    >UPCOMING EVENTS</button> <br/> 

                    <button class="adminMenuButtons"
                    v-on:click="viewCases"
                    >CASE MANAGEMENT </button> <br/> 

                    <button class="adminMenuButtons"
                    v-on:click="viewVolunteer"
                    >VOLUNTEERS</button> <br/> 

                    <button class="adminMenuButtons"
                    v-on:click="registerVolunteer"
                    >REGISTER VOLUNTEER</button> <br/> 

                    <router-view></router-view>
                   
                   
                </center>
</template>

<script>
export default {
    methods: {
        viewEvents() {
            this.$router.push('/events');
        },
        viewCases() {
            console.log(`view cases`);
        }, 
        viewVolunteer() {
            console.log(`view volunteers`);
        },
        registerVolunteer() {
            console.log(`register volunteers`);
        },
    }
  
}
</script>

<style>
.adminMenuButtons {
    height: 90px;
    width:80%;
    max-width: 300px;
    color: #ffffff;
    font-family: 'Heebo', sans-serif;
    letter-spacing: 2px;
    background-color: rgb(118, 118, 118);
    margin-bottom: 10px;
    margin-top: 10px;
    border-radius: 8px;
    border: 0px;
    font-size: 15px;
}
</style>
