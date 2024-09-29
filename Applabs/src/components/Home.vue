<template>
    <div class="parallax-container">
        <div class="background-img">
            <div class="set">
                <div class="content">
                    <h1>{{ info.name }}</h1>
                    <p>{{ info.title}} </p>
                </div>
                <div id="profile-img">
                    <img id="me" :src=info.img>
                </div>
            </div>
        </div>
    </div>
    <div class="home">
        <div class="works">
            <h1>Related Works</h1>
            <div class="theworks">
                <li v-for="work in works" :key="work.id">
                    <a :href="work.url" target="_blank">
                        <img :src="work.s" class="icon"/>
                    </a>
                </li>
            </div>
        </div>
        <div class="contact">
            <h1>Contact me</h1>
            <div class="icon_items">
                <li v-for="item in icon_items" :key="item.id">
                    <a :href="item.url" target="_blank">
                        <img :src="item.img" class="icon"/>
                    </a>
                </li>
            </div>
            <div class="mail" >
                <p >E-mail: {{info.email}} </p>
                <p>Phone Number: {{ info.phone }}</p>
            </div>
        </div>
    </div>
    <footer>
        <p>© 2022 {{ info.name }}</p>    
    </footer>


</template>

<script setup>
const info = {
    name: 'Chen Yen-Cheng',
    title: 'Student at CS department of NTHU',
    img: 'src/assets/me.jpg',
    phone: ' (+886) 965-651-317',
    email: 'kevin20010808@gmail.com',
}
const icon_items = [
    { id: 1, title: 'discord', url: 'https://discord.com/'  , img: 'src/assets/discord.png'},
    { id: 2, title: 'Github', url: 'https://github.com/kevin20010808', img: 'src/assets/github.png'},
    { id: 3, title: 'Instagram' , url: '', img: 'src/assets/ig.png'},
    { id: 4, title: 'X', url: '',img: 'src/assets/x.png'},
]
const theworks = []

</script>

<style>

.home {
    background-color: #E0E0E2;
    color: #56494C;
    height: 63vh;
    border-radius: 10px;
    text-align: center;
}


.home h1 {
    padding-top: 40px;
    font-size: 2em;
    font-weight: bold;
}

.set {
    display: flex; 
    align-items: center;
    justify-content: center;
    height: 70vh;
    color: white;
}

.icon_items {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    text-decoration: none;
    color: #56494C;
}

.icon_items li {
    margin: 0 15px;
    border-radius: 10px;
    transition: all 0.3s;
}

.icon {
    width: 50px;
}


.parallax-container {
  position: relative;
  height: 70vh;
  
}

#me {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    /* put in right center*/
    margin-left: 30px;
    margin-top: 300px;
}

.background-img {
    padding-bottom: 55px;
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
    margin-top: 25vh;
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