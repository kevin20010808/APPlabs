<template>
    <div class="parallax-container">
        <div class="background-img">
            <div class="content">
                <h1>Chen Yen-Cheng</h1>
                <p>Student at CS department of NTHU</p>
                <button>Contact Now</button>
            </div>
        </div>
    </div>
    <div class="home">
        <h1>Home</h1>
        <p>Welcome to my website</p>
        <p>Click the button below to learn more about me</p>
        <router-link to="/about">About me</router-link>
    </div>

</template>

<script>
export default {
    name: 'Home',
    mounted() {
    window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const offset = window.pageYOffset;
            const background = document.querySelector('.parallax-background');
            background.style.transform = `translateY(${offset * 0.5}px)`;
        }
    }
}
</script>

<style>

.home {
    background-color: #cebdbd;
    color: rgb(201, 34, 34);
    padding: 10px;
    height: 100vh;
    text-align: center;
}


.home a.router-link-exact-active {
    color: #42b963;
}

.parallax-container {
  position: relative;
  overflow-y: scroll;
  height: 70vh;
}

.background-img {
    position: fixed;
    background-image: url('../assets/background.jpg');
    background-size: cover;
    background-position: center;  
    position: fixed; 
    width: 100%; 
    height: 100%; 
    top: 0;
    left: 0;
    z-index: -1;
    
}


.content {
    color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    margin-top: 5vh;
    text-align: center;
}

.content p {
    font-size: 1em;
    letter-spacing: 2px;
}

.content h1 {
    font-size: 3em;
    font-weight: bold;
}

button {
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 1em;
  color: #fff;
  background-color: #0066cc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0055bb;
}

</style>