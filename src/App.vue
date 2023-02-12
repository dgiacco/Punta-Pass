<template>
  <header class="header">
    <div class="header__logo">
      <img src="../public/puntaicon.png" alt="Logo">
      <h1 class="header__logo__title">Punta Pass</h1>
    </div>
  </header>
  <TheHeader/>
  <PuntaOffers/>
  <PuntaFooter/>
</template>

<script>
import PuntaOffers from './components/PuntaOffers.vue'
import TheHeader from './components/TheHeader.vue'
import PuntaFooter from './components/PuntaFooter.vue'

export default {
  name: 'App',
  components: {
    PuntaOffers,
    TheHeader,
    PuntaFooter
  }
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.header__logo {
  display: flex;
  align-items: center;
}

.header__logo__title {
  font-size: 40px;
  font-weight: bold;
  margin-left: 10px;
}

.header__nav {
  display: flex;
}

.header__nav__list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.header__nav__item {
  margin-left: 20px;
}

.header__nav__item a {
  text-decoration: none;
  color: inherit;
}
</style>
