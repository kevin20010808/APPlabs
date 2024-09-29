<template>
    <div class="works">
        <h1>Works</h1>
        <div class="theworks">
            <li v-for="work in works" :key="work.id">
                <h1> {{ work.title }} </h1>
                <p> {{ work.description }} </p>
            </li>
        </div>
    </div>

</template>

<script setup>
const works = [
    {
        title: 'Applabs',
        description: 'A website for a fictional company that offers web development services.',
        image: 'https://via.placeholder.com/150'
    },
    {
        title: 'Portfolio',
        description: 'A website that showcases my projects and skills.',
        image: 'https://via.placeholder.com/150'
    },
    {
        title: 'Weather App',
        description: 'A simple weather app that displays the current weather in a city.',
        image: 'https://via.placeholder.com/150'
    }
]



</script>

<style>
.works{
    margin-top: 10vh;
    padding-left: 40px;
}

.theworks{
    list-style-type: none;

}
</style>