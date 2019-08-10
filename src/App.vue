<template>
  <div id="app">
    <ingredient msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ingredient from './components/ingredient.vue'

export default {
  name: 'app',
  components: {
    ingredient
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body{
  background-color: #eeeeee;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template: auto;
  justify-items: center;
  align-items: center;
}

body, html {
  margin: 0;
  height: 100%;
}

#app {
  width:50%;
}
</style>
