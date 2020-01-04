<template>
  <div id="app">
    <!-- This was used when there was no router, now that a router was added things need to change. -->
    <!-- <ingredient msg="Welcome to Your Vue.js App"/> -->
    <Header></Header>
    <!-- This is where the nav will show, now needed because we have a router-->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <!-- This is where the components should show-->
    <router-view/>

  </div>
</template>

<script>
import Header from './components/HeaderComponents/header'
export default {
  name: 'app',
  components: {
    Header
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
  padding-top: 20px;
}

body, html {
  margin: 0;
  height: 100%;
}

#app {
  width:75%;
}

@media only screen and (max-width: 600px){
  #app {
    width: 95%;
  }
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0,110,255);
  font-weight: bold;
  margin-right: 15px;
}

</style>
