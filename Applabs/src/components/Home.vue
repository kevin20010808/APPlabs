<template>
    <div>
        <h1>Home</h1>
        <p>Welcome to our website!</p>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>

.home {
    background-color: #333;
    color: rgb(201, 34, 34);
    padding: 10px;
    text-align: center;
}

.home a {
    color: #333;
    margin: 0 10px;
}

.home a.router-link-exact-active {
    color: #42b963;
}

.home h1 {
    color: #333;
    margin: 0 10px;
}

.home p {
    color: #666;
    margin: 0 10px;
}
</style>