<template>
  <div class="container mt-5">
    <h2 class="text-center mb-5">Discount Offers</h2>
    <div class="row">
      <div class="col-md-4" v-for="offer in offers" :key="offer.id">
        <div class="card mb-3">
          <img :src="offer.image" class="card-img-top" alt="offer image">
          <div class="card-body">
            <h5 class="card-title">{{ offer.title }}</h5>
            <p class="card-text">{{ offer.description }}</p>
            <a href="#" class="btn btn-primary">Learn More</a>
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
        id: 1,
        title: 'Summer Sale',
        description: 'Get 20% off on all products',
        image: 'https://picsum.photos/200/300'
      },
      {
        id: 2,
        title: 'Black Friday',
        description: 'Get up to 50% off on selected products',
        image: 'https://picsum.photos/200/300'
      },
      {
        id: 3,
        title: 'New Year Deal',
        description: 'Get 10% off on first purchase',
        image: 'https://picsum.photos/200/300'
      }
    ]);

</script>