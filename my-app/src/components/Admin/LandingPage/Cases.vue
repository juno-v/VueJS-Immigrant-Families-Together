<template>
  <center>
      <h1>CASE MANAGEMENT</h1>
      
      <router-link to=/view-cases>
        <button class="adminMenuButtons"
        >VIEW CASES</button> 
      </router-link> <br/> 
      
      <router-link to=/add-case>
        <button class="adminMenuButtons"
        >ADD NEW CASE</button> 
      </router-link> <br/> 
      
      <router-link to=/edit-case>
        <button class="adminMenuButtons"
        >EDIT EXISTING CASE</button> 
      </router-link> <br/> 

      <router-link to=/close-case>
        <button class="adminMenuButtons"
        >CLOSE CASE</button> 
      </router-link> <br/> 

  </center>
</template>

<script>
export default {
  name: 'cases',
    methods: {
    }
}
</script>

<style>

</style>