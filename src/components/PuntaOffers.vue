<template>
    <div class="container my-5">
      <h1 class="text-center">Discount Offers</h1>
      <hr />
      <div class="row">
        <div class="col-md-4" v-for="offer in offers" :key="offer.title">
          <div class="card-container">
            <div class="card mb-4">
              <img :src="offer.image" class="card-img-top" alt="offer image">
              <div class="card-body">
                <h5 class="card-title">{{ offer.title }}</h5>
                <p class="card-text">{{ offer.description }}</p>
                <div class="text-center">
                  <h6 class="font-weight-bold">{{ offer.discount }}% off</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const offers = ref([
      {
        title: "Restaurant A",
        description: "50% off on all menu items",
        discount: 50,
        image: "https://picsum.photos/200/300"
      },
      {
        title: "Tour B",
        description: "30% off on all tours",
        discount: 30,
        image: "https://picsum.photos/200/300"
      },
      {
        title: "Restaurant C",
        description: "20% off on all menu items",
        discount: 20,
        image: "https://picsum.photos/200/300"
      },
      {
        title: "Tour D",
        description: "15% off on all tours",
        discount: 15,
        image: "https://picsum.photos/200/300"
      }
    ])
  </script>
  
  <style>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .card {
    width: 300px;
    height: 200px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  .card:hover {
    transform: scale(1.1);
  }
  </style>