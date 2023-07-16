<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import AppNav from './components/AppNav.vue';
  import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <header>
    <AppNav/>
  </header>
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>