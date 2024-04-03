<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About us</router-link> |
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
nav {
  background-color: #ffffff;
  color: rgb(175, 36, 36);
  padding: 30px;
  
  text-align: center;
  font-size: larger;
}

nav a {
  color: #333;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #072710;
  font: bold;
}

</style>
