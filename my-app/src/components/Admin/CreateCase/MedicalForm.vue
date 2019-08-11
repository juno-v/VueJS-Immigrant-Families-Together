<template>
   <center>
       <h1>MEDICAL FORM</h1>     
        <div class="formDivs">
            <label>PRIMARY DOCTOR NAME</label> 
            <input type="text" /> 
            
            <label>PRIMARY DOCTOR PHONE</label> 
            <input type="text" /> 
        
            <label>MEDICAL CONDITIONS</label> 
            <input type="text"/> 

            <label>COUNSELOR NAME</label> 
            <input type="text"/> 
            
            <label>COUNSELOR PHONE</label> 
            <input type="text"/> 
            
            <label>PEDIATRICIAN NAME</label> 
            <input type="text"/> 
            
            <label>PEDIATRICIAN PHONE</label> 
            <input type="text"/> 
            
            <label>OPTOMETRIST NAME</label> 
            <input type="text"/> 
            
            <label>OPTOMETRIST PHONE</label> 
            <input type="text"/> 
            
            <label>DENTIST NAME</label> 
            <input type="text"/> 
            
            <label>DENTIST PHONE</label> 
            <input type="text"/> 
            
            <label>VACCINATIONS</label> 
            <input type="text"/> 
            
            <label>INSRUANCE CARD INFO</label> 
            <input type="text"/> 
            
            <label>FEE COVERAGE</label> 
            <select>
            <option defaultValue>-</option>
            <option value={true}>True</option>
            <option value={false}>False</option>
            </select> 
            
            <label>MEDICAL NOTES</label> 
            <input type="text"/> 
            
            <router-link to=/school-form>
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