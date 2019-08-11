<template>
  <center>
    <h1>LEGAL FORM</h1>     
    <div className="formDivs">
        <label>LAST COURT DATE</label> 
        <input type="date"/>

        <label>OUTCOME</label> 
        <input type="text"/> 

        <label>NEXT COURT DATE</label> 
        <input type="date"/>

        <label>TOPIC</label> 
        <input type="text"/> 

        <label>ASYLUM APPLIED FOR</label> 
        <input type="text" 
        placeholder="type true or false" /> 

        <label>WORK AUTH</label> 
        <input type="text" 
        placeholder="type true or false"/> 

        <router-link to=/admin-landing>
            <button class="formButton">COMPLETE CASE</button>
        </router-link>
    </div>
</center>
</template>

<script>
export default {

}
</script>

<style>

</style>