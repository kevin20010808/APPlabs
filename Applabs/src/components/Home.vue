<template>
    <div class="parallax-container">
        <div class="background-img">
            <div class="content">
                <h1>Chen Yen-Cheng</h1>
                <p>Student at CS department of NTHU</p>
                <img id="me" src="../assets/me.jpg">
                <button>See my works</button>

            </div>
        </div>
    </div>
    <div class="home">
        <!-- <h1>works</h1> -->
        
        <h1>Contact me</h1>
        <div class="items">
            <li v-for="item in items" :key="item.id">
                <a :href="item.url" target="_blank">
                    <img :src="item.img" class="icon"/>

                </a>
            </li>
        </div>
    </div>
    <footer>
        <p>© 2022 Chen Yen-Cheng</p>    
    </footer>


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
            const background = document.querySelector('.background-img');
            background.style.transform = `translateY(${offset * 0.3}px)`;
        }
    },
    data() {
        return {
            items: [
                { id: 1, title: 'discord', url: 'https://discord.com/'  , img: 'src/assets/discord.png'},
                { id: 2, title: 'Github', url: 'https://github.com/kevin20010808', img: 'src/assets/github.png'},
                { id: 3, title: 'Instagram' , url: '', img: 'src/assets/ig.png'},
                { id: 4, title: 'X', url: '',img: 'src/assets/x.png'},
            ]
        }
    }
}
</script>

<style>

.home {
    background-color: #c6e4fd;
    color: #0066cc;
    padding: 10px;
    height:60vh;
    border-radius: 10px;
    text-align: center;
}

.home h1 {
    margin-top: 60px;
    font-size: 2em;
    font-weight: bold;
}

.items {
    display: flex;
    margin-top: 35vh;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    text-decoration: none;
    color: #0066cc;
}

.items li {
    margin: 0 15px;
    border-radius: 10px;
    transition: all 0.3s;

}

.icon {
    width: 50px;


}


.parallax-container {
  padding-top: 60px;
  position: relative;
  height: 70vh;
  
}

#me {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5)
    
}

.background-img {
    padding-bottom: 60px;
    position: fixed;
    background-image: url('../assets/background.jpg');
    background-size: cover;
    background-position: bottom;  
    width: 100%; 
    height: 120%; 
    bottom: 0;
    left: 0;
    z-index: -1;
}


.content {
    display: flex;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    margin-top: 32vh;
    text-align: center;
    align-items: center;
}

#contacts {
    display: flex;
    color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    text-align: center;
    align-items: center;
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
  color: #04498f;
  text-transform: uppercase;
;
  background-color: #5ae2e2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #415546;
}


footer {
    background-color: #c6e4fd;
    color: #0066cc;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
}



</style>