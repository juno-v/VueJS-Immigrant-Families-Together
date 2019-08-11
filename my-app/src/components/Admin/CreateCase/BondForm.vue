<template>
   <center>
       <h1>BOND FORM</h1>     
        <div class="formDivs">
            <label>ICE FACILITY</label> 
            <input type="text"/> 

            <label>BOND AMOUNT</label> 
            <input type="text"/>

            <label>BOND PAID DATE</label> 
            <input type="date"/>

            <label>BOND PAID BY</label> 
            <input type="text"/> 

            <label>FOSTER FACILITY</label> 
            <input type="text"/> 

            <label>FOSTER FACILITY ADDRESS</label> 
            <input type="text"/> 

            <label>ATTORNEY</label> 
            <input type="text"/> 

            <label>ATTORNEY PHONE</label> 
            <input type="text"/>

            <label>ATTORNEY FEE</label> 
            <input type="text"/> 

            <label>LEGAL NOTES</label> 
            <input type="text"/> 

            <router-link to=/legal-form>
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