<template>
  <center>
        <div class="formDivs">
            <label>SCHOOL NAME</label> 
            <input type="text"/>
            <label>PHONE NUMBER</label> 
            <input type="text"/>
            <label>EMAIL</label> 
            <input type="text"/> 
            
            <button class="formButton"> SUBMIT SCHOOL </button> 

            <button class="formButton"> SUBMIT ANOTHER SCHOOL </button>
            
            <br/>

            <router-link to=/housing-form>
                <button class="formButton">NEXT </button>
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