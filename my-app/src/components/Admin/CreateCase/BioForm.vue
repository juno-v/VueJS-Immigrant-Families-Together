<template>
   <center>
       <h1>BIO FORM</h1>       
        <div class="formDivs" >
            
            <label>FIRST NAME</label> 
            <input type="text"/> 

            <label>LAST NAME</label> 
            <input type="text" /> 

            <label>D.O.B</label> 
            <input type="date" /> 

            <label>SPOUSE NAME</label> 
            <input type="text" /> 

            <label>SPOUSE D.O.B</label> 
            <input type="date" /> 

            <label>PHONE</label> 
            <input type="text" /> 

            <label>ENCRYPTED</label> 
            <input type="text" />

            <label>EMAIL</label> 
            <input type="text"/> 

            <label>REGION/STATE</label> 
            <input type="text" /> 

            <label>REFERRED BY</label> 
            <input type="text"/> 

            <label>REFERENCE DATE</label> 
            <input type="date"/> 

            <label>PASSPORT</label> 
            <select>
                <option defaultValue>-</option>
                <option value={true}>True</option>
                <option value={false}>False</option>
            </select>

            <label>USA I.D</label> 
            <select>
                <option defaultValue>-</option>
                <option value={true}>True</option>
                <option value={false}>False</option>
            </select>

            <router-link to="/children-form">
                <button class="formButton">NEXT</button>    
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