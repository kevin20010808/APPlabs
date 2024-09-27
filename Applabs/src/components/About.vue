<template>
  <div class="about">
    <div class="education">
      <h1>Education</h1>
        <h2>{{ education.school }}</h2>
        <p>{{ education.degree }}</p>
        <p>{{ education.year }}</p>
    </div>
    <div class="skills">
      <h1>Skills</h1>
      <div v-for="(values,key) in skill">
        <h2>{{ key }}</h2>
        <ul>
          <li v-for="val in values" >{{ val }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const education = {
  school: 'National Tsing Hua University',
  degree: 'B.S. in Computer Science',
  year: '2022-present',
  discrpition: '',
}
const skill = {
  "Programming Languages": ['Java', 'Python', 'JavaScript', 'C++'],
  "Web Development": ['HTML', 'CSS', 'JavaScript', 'React'],
  "Mobile Development": ['Android', 'React Native'],
  "Machine Learning": ['Python', 'TensorFlow', 'Keras'],
  "Tranferable Skills": ['Problem Solving', 'Teamwork', 'Communication', 'Time Management'],
}
</script>

<style scoped>
.about {
  margin-bottom: 20px;
  padding-left: 15px;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about ul {
  border-left: solid rgb(27, 23, 23);
  list-style-type: none;
}
</style>