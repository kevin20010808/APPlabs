<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About us</router-link> |
      <!-- other pages -->
    </nav>
    <router-view/>
  </div>
  <p>Home !</p>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  background-color: #333;
  color: rgb(175, 36, 36);
  padding: 10px;
  text-align: center;
}

nav a {
  color: #333;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b963;
}

</style>
