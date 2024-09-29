<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About me</router-link> |
      <router-link to="/works">Works</router-link>
      <!-- other pages -->
    </nav>
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'App'
}

</script>

<style>



.navbar {
  background-color: #E0E0E2;
  padding: 20px;
  margin: 0%  0% 2% 0% ;
  text-align: center;
  font-size: 1.7em;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
}


.navbar a{
  text-decoration: none;
  color: #56494C;
  padding: 0 10px;
}



</style>
