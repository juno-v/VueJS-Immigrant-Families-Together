<template>
    <center>
        <h1>CHILDREN FORM</h1>     
        <div class="formDivs">

        <label>NAME</label> 
        <input type="text"/> 

        <label>DOB</label> 
        <input type="date"/> 
    
        <label>INFO</label> 
        <input type="text" /> 
    
        <!-- pushes new state to children array to create multiple children  -->
        <button 
        class="formButton">
        SUBMIT CHILD
        </button> 
        <br/>
        <!--  clears input fields to enable adding another child   -->
        <button 
        class="formButton2"
        > ADD ANOTHER CHILD
        </button>
        <br/>
            
        <!-- dispatch to childrenSaga to post data   -->
        <router-link to=/medical-form>
            <button class="formButton"> NEXT </button>
        </router-link>
    </div>
</center> 
</template>

<script>
export default {

}
</script>

<style scoped>
.formButton2 {
    width: 200; 
    margin-top: 10px;
    height: 45px;
    letter-spacing: 2px;
    background-color: rgb(118, 118, 118);
    margin-bottom: 20px;
    margin-top: 10px;
    border-radius: 8px;
    border: 0px;
    font-size: 15px;
    max-width:300px;
    color: white;
}
</style>