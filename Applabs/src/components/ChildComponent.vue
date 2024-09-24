<template>
    <div :style="{ color: themeColor, border: '1px solid', padding: '10px', marginTop: '10px' }">
      <h2>子元件</h2>
      <p>這裡是使用主題顏色的子元件。</p>
    </div>
  </template>
  
  <script>
  import { inject } from 'vue';
  
  export default {
    setup() {
      const themeColor = inject('themeColor');
  
      return {
        themeColor,
      };
    },
  };
  </script>
  