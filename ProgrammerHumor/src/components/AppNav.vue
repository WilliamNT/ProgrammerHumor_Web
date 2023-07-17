<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import LogoImage from "../assets/site/logo.png";
</script>

<template>
  <nav class="flex h-14 items-center justify-between p-2 bg-white">
    <router-link to="/" class="flex gap-2 items-center">
      <img
        :src="LogoImage"
        alt="ProgrammerHumor logo"
        class="h-9 rounded-full"
      />
      <span class="text-muted">r/ProgrammerHumor</span>
    </router-link>

    <details class="relative sm:hidden inline-block">
      <summary class="btn">
        <font-awesome-icon
          :icon="['fas', 'bars']"
          size="lg"
          :style="{ color: 'black' }"
        />
      </summary>
      <div
        class="flex flex-col absolute right-0 mt-4 z-10 rounded-md p-2 bg-white"
      >
        <a
          href="https://www.reddit.com/r/ProgrammerHumor/"
          target="_blank"
          class="btn-sm"
        >
          Subreddit
        </a>
        <a
          href="https://www.reddit.com/r/ProgrammerHumor/wiki/index/"
          target="_blank"
          class="btn-sm"
        >
          Wiki
        </a>
        <a
          href="https://www.reddit.com/message/compose?to=/r/ProgrammerHumor"
          target="_blank"
          class="btn-sm"
        >
          Modmail
        </a>
        <router-link to="projects" class="btn-sm"
          >Community Projects</router-link
        >
      </div>
    </details>

    <div class="gap-2 hidden sm:flex">
      <a
        href="https://www.reddit.com/r/ProgrammerHumor/"
        target="_blank"
        class="btn"
      >
        Subreddit
      </a>
      <a
        href="https://www.reddit.com/r/ProgrammerHumor/wiki/index/"
        target="_blank"
        class="btn"
      >
        Wiki
      </a>
      <a
        href="https://www.reddit.com/message/compose?to=/r/ProgrammerHumor"
        target="_blank"
        class="btn"
      >
        Modmail
      </a>
      <router-link to="projects" class="btn">Community Projects</router-link>
    </div>
  </nav>
</template>
