<script setup lang="ts">
import ProjectPost from "../components/ProjectPost.vue";

const Tags = {
  Done: "Done ✅",
  InProgress: "In Progress 📈",
  Ideas: "Ideas 💡",
};
</script>

<template>
  <section class="flex flex-col justify-center max-w-4xl mx-auto p-4">
    <ProjectPost
      avatar="https://avatars.githubusercontent.com/u/62805599"
      username="elijah629"
      link="https://github.com/elijah629/redditlang"
      title="RedditLang"
      description="worlds #1 language"
      thumbnail="https://placehold.co/600x400"
      :tags="[Tags.Ideas, Tags.InProgress]"
    />
  </section>
</template>