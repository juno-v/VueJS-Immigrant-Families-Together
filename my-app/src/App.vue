<template>
  <div id="app">
    <div class="header">
      <img alt="Vue logo" src="./assets/logo.png">
      <h1> Juno's awesome blog </h1>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
     <Container /> 
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Container from "./components/Container.vue"; 

export default {
  name: 'app',
  components: {
    //HelloWorld
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
