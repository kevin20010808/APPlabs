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
      // 定義一個響應式變量來保存主題顏色
      const themeColor = ref('lightblue');
  
      // 切換主題顏色的方法
      const toggleTheme = () => {
        themeColor.value = themeColor.value === 'lightblue' ? 'lightcoral' : 'lightblue';
      };
  
      // 使用 provide 將主題顏色提供給子元件
      provide('themeColor', themeColor);
  
      return {
        themeColor,
        toggleTheme,
      };
    },
  };
  </script>
  