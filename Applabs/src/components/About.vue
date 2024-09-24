<template>
    <h1>about</h1>
    <div :style="{ backgroundColor: themeColor, padding: '20px' }">
      <h1>主題提供者元件</h1>
      <button @click="toggleTheme">切換主題</button>
      <ChildComponent />
    </div>
  </template>
  
  <script>
  import { ref, provide } from 'vue';
  import ChildComponent from './ChildComponent.vue';
  
  export default {
    components: {
      ChildComponent,
    },
    setup() {
      const themeColor = ref('lightblue');
  
      const toggleTheme = () => {
        themeColor.value = themeColor.value === 'lightblue' ? 'lightcoral' : 'lightblue';
      };
  
      provide('themeColor', themeColor);
  
      return {
        themeColor,
        toggleTheme,
      };
    },
  };
  </script>
  