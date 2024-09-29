<template>
  <div class="background"></div>
  <div class="about">
    <article class="education">
      <h1>Education</h1>
        <h2>{{ education.school }}</h2>
        <p>{{ education.degree }}</p>
        <p>{{ education.year }}</p>
    </article>
    <article class="interact">
      <div class="discrpition">
        <h1>Discrpition</h1>
        <div class="content">
          <p> {{ discrpitionContent }}</p>
        </div>
      </div>
      <div class="skills">
        <h1>Skills</h1>
        <div v-for="(values,key) in skill">
          <h2>{{ key }}</h2>
          <ul>
            <li v-for="val in values" :key="val">
              <button @click="showDis(val)" class="value">{{ val }}</button>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </div>

</template>

<script setup>
import { ref } from 'vue';
const discrpitionContent = ref('');
const education = {
  school: 'National Tsing Hua University',
  degree: 'B.S. in Computer Science',
  year: '2022-present',
}
const skill = {
  "Programming Languages": ['Java', 'Python', 'JavaScript', 'C++'],
  "Web Development": ['HTML', 'CSS', 'JavaScript', 'React'],
  "Mobile Development": ['Android', 'React Native'],
  "Machine Learning": ['Python', 'TensorFlow', 'Keras'],
  "Tranferable Skills": ['Problem Solving', 'Teamwork', 'Communication', 'Time Management'],
}

const discrpition = {
  "Java": "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
  "Python": "Python is an interpreted, high-level, general-purpose programming language.",
  "JavaScript": "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
  "C++": "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.",
  "HTML": "HTML is the standard markup language for documents designed to be displayed in a web browser.",
  "CSS": "CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
  "React": "React is an open-source, front end, JavaScript library for building user interfaces or UI components.",
  "Android": "Android is a mobile operating system based on a modified version of the Linux kernel and other open source software.",
  "React Native": "React Native is an open-source mobile application framework created by Facebook, Inc.",
  "TensorFlow": "TensorFlow is an end-to-end open source platform for machine learning.",
  "Keras": "Keras is an open-source deep learning API written in Python.",
  "Problem Solving": "Problem solving consists of using generic or ad hoc methods in an orderly manner to find solutions to problems.",
  "Teamwork": "Teamwork is the collaborative effort of a group to achieve a common goal or to complete a task in the most effective and efficient way.",
  "Communication": "Communication is the act of conveying meanings from one entity or group to another through the use of mutually understood signs, symbols, and semiotic rules.",
  "Time Management": "Time management is the process of planning and exercising conscious control of time spent on specific activities, especially to increase effectiveness, efficiency, and productivity.",
}

function showDis(val) {
  return discrpitionContent.value = discrpition[val];
}


</script>

<style>



body {
  margin: 0;
}

.background {
  background-color: #B5BAD0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.about {
  display: flex;
  color: #56494C;
  padding-top: 12vh;
  flex-direction: column;
}

.about ul {
  border-left: solid #56494C;
  list-style-type: none;
}


.value {
  border: none;
  background-color: #B5BAD0;
  margin: 0;
}

.value:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}

.education {
  padding-left: 15%;
}

.interact{
  display: flex;
  padding-top: 5vh;
  padding-right: 5%;
  justify-content: space-between;
}

.discrpition {
  padding-left: 15%;
  width: 60%;
}

.content {
  line-height: 2;
  font-size: large;
  margin-top: auto;
  text-align: left;
}

</style>