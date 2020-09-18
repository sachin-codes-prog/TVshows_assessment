<template>
  <div id="app" >
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
:root {
  --main-bg-color: rgb(82, 83, 75);  
  --secondary-bg-color: black;  
  --tertiary-bg-color: #dad7d7;
  --main-text-color: rgb(69, 179, 156);
  /* --main-text-color: rgb(166, 255, 0); */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--main-bg-color); 
  color: var(--main-text-color);
  height: 100vh;
}
</style>
