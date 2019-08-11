<template>
   <center>
       <h1>HOUSING FORM</h1>     
        <div class="formDivs">
            <label>ADDRESS</label> 
            <input type="text"/> 
            <label>MONTHLY RENT</label> 
            <input type="text"/> 
            <label>RENT PAID BY</label> 
            <input type="text"/> 
            <label>UTILITIES</label> 
            <input type="text"/> 
            <label>LIVING WITH FAMILY</label> 
            <select>
                <option defaultValue>-</option>
                <option
                value='true'>True</option>
                <option value='false'>False</option>
            </select>

            <router-link to=/aid-form>
                <button class="formButton"> NEXT </button>
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