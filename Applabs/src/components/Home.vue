<template>
    <div class="parallax-container">
        <div class="background-img">
            <div class="set">
                <div class="content">
                    <h1>Chen Yen-Cheng</h1>
                    <p>Student at CS department of NTHU</p>
                </div>
                <div id="profile-img">
                    <img id="me" src="../assets/me.jpg">
                    <!-- <button>See my works</button> -->
                </div>
            </div>
        </div>
    </div>
    <div class="home">
        <div class="works">
            <h1>Works</h1>
            <div class="theworks">
                <li v-for="work in works" :key="work.id">
                    <a :href="work.url" target="_blank">
                        <img :src="work.img" class="icon"/>
                    </a>
                </li>
            </div>
        </div>
        <!-- <h1>works</h1> -->
        <div class="contact">
            <h1>Contact me</h1>
            <div class="items">
                <li v-for="item in items" :key="item.id">
                    <a :href="item.url" target="_blank">
                        <img :src="item.img" class="icon"/>

                    </a>
                </li>
            </div>
            <div class="mail">
                <p>E-mail: kevin20010808@gmail.com </p>
                <p>Phone Number: (+886) 965-651-317</p>
            </div>
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
    background-color: #E0E0E2;
    color: #56494C;
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

.set {
    display: flex; 
    align-items: center;
    justify-content: center;
    height: 90vh;
    color: white;
}

.items {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    text-decoration: none;
    color: #56494C;
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
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    /* put in right center*/
    margin-left: 50px;
    margin-top: 300px;
}

.background-img {
    padding-bottom: 60px;
    position: fixed;
    background-color: #B5BAD0;
    /* background-image: url('../assets/background.jpg'); */
    background-size: cover;
    background-position: bottom;  
    width: 100%; 
    height: 120%; 
    bottom: 0;
    left: 0;
    z-index: -1;
}

.profile-img {
    display: flex;
}

.content {
    display: flex;
    flex-direction: column;
    color: #56494C;
    padding: 20px;
    margin-top: 32vh;
    text-align: center;
    align-items: center;
    line-height:0.3;
}


.content p {
    font-size: 1em;
    letter-spacing: 2px;
}

.content h1 {
    font-size: 3em;
    font-weight: bold;
}

.contact{
    margin-top: 27vh;
    margin-bottom: auto;
}
.mail {
    font-size: 1em;
    letter-spacing: 2px;
    line-height: 0.3;
    display: flex;
    justify-content: space-around;

}

button {
  padding: 10px 20px;
  margin-top: 30px;
  font-size: 1em;
  color: #56494C;
  text-transform: uppercase;
  background-color: #E0E0E2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #415546;
}


footer {
    background-color: #E0E0E2;
    color: #56494C;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
}



</style>