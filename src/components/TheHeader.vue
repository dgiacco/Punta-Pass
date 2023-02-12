<template>
  <div class="appName">Punta Pass</div>
  <header class="header">
    <h1 class="header__title">{{ title }}</h1>
    <p class="header__subtitle">{{ subtitle }}</p>
  </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
      const title = ref('Special Offers');
      const subtitle = ref('Take advantage of these amazing discounts');
  
  </script>
  
  <style>
  .header {
    padding: 20px;
    text-align: center;
    background-color: #3f51b5;
    color: #fff;
  }
  
  .header__title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .header__subtitle {
    font-size: 18px;
    font-weight: normal;
    opacity: 0.7;
  }

  .appName {
    font-size: 40px;
    color: #3f51b5;
    background-color: #7eb3f3;
    font-weight: bold;
  }
  </style>