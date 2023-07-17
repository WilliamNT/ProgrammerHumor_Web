<script setup lang="ts">
import CommunityBar from "../components/CommunityBar.vue";
</script>

<template>
  <section
    class="h-full w-full before:bg-accent flex items-center justify-center text-white bg-hero overflow-hidden relative"
  >
    <div class="flex flex-col items-center gap-4">
      <h1 class="text-3xl sm:text-4xl font-bold">r/ProgrammerHumor</h1>
      <CommunityBar />
    </div>
  </section>
</template>
