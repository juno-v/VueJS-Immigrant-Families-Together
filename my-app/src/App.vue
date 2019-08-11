<template>
  <div id="app">
    <div class="header">
      <center>
        <img alt="Vue logo" src="./assets/logo.png">
      </center> 
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
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
