<script setup lang="ts">
  import AppNav from './components/AppNav.vue';
  import Home from './views/Home.vue';
  import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <header>
    <AppNav/>
  </header>
  <main>
    <Home/>
  </main>
  <AppFooter />
</template>