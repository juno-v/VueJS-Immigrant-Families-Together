<template>
    <center>
                    <div>
                        <h1>MENU</h1>
                    </div>

                    <button className="adminMenuButtons"
                    v-on:click="viewEvents"
                    >UPCOMING EVENTS</button> 

                    <button className="adminMenuButtons"
                    v-on:click="viewCases"
                    >CASE MANAGEMENT </button> 

                    <button className="adminMenuButtons"
                    v-on:click="viewVolunteer"
                    >VOLUNTEERS</button> 

                    <button className="adminMenuButtons"
                    v-on:click="registerVolunteer"
                    >REGISTER VOLUNTEER</button> 
                   
                </center>
</template>

<script>
export default {
    methods: {
        viewEvents() {
            console.log(`view events`);
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

</style>
