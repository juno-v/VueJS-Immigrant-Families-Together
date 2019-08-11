<template>
  <center>
    <h1>CASE LIST </h1> 
    
    <label>SEARCH:</label>
    <input placeholder="NAME" type="text" />
    <button class='searchButton'>SEARCH</button>

    <table>
        <thead>
            <tr>
                <td>LAST NAME </td>
                <td>CASE NUMBER </td>
                <td>ACTIVE / INACTIVE </td>
            </tr>
        </thead>
        <tbody>
                <tr>
                    <td>{i.case_last_name}</td>
                    <td>{i.case_number}</td>
                    <td>{i.status}</td>
                </tr>
        </tbody>
    </table>
</center>
</template>

<script>
export default {

}
</script>

<style>

</style>