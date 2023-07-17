<script setup lang="ts">
import AppNav from "./components/AppNav.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <header>
    <AppNav />
  </header>
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>
