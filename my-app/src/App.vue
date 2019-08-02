<template>
  <div id="app">
    <div class="header">
      <center>
        <img alt="Vue logo" src="./assets/logo.png">
      </center> 
    </div>
     <Container /> 
  </div>
</template>

<script>
import Container from "./components/Container.vue"; 

export default {
  name: 'app',
  components: {
    Container, 
  }
}
</script>


/* scoped means only accessed in this component */
<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

/* .container-inner {
  background-color: green; 
} */
</style>
