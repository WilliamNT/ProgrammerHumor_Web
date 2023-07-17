<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  avatar: string;
  username: string;
  link: string;
  thumbnail: string;
  tags: string[];
}>();
</script>

<template>
  <div class="bg-white border-2 rounded-xl overflow-hidden">
    <div class="flex p-2 justify-between">
      <div class="flex items-center gap-2">
        <img
          class="w-7 rounded-full"
          :src="avatar"
          :alt="`${title}'s avatar image`"
        />
        <p class="text-muted text-sm">{{ username }}</p>
      </div>
      <div class="flex gap-2">
        <span
          class="bg-accent text-white rounded-full py-1 px-2 text-sm"
          v-for="tag in tags"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="flex flex-col gap-1 p-3">
        <a target="_blank" :href="link" class="font-bold text-xl">{{
          title
        }}</a>
        <p class="text-muted text-sm">{{ description }}</p>
      </div>
      <img class="h-28" :src="thumbnail" :alt="`${title}'s thumbnail image`" />
    </div>
  </div>
</template>