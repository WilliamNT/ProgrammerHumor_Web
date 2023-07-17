<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDiscord,
  faReddit,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faDiscord);
library.add(faReddit);
library.add(faTwitch);
</script>

<template>
  <div
    class="sm:flex-row flex flex-col shadow-md rounded-xl w-full text-center sm:rounded-full p-2 bg-white gap-4"
  >
    <a
      href="https://www.reddit.com/r/ProgrammerHumor/"
      target="_blank"
      class="btn-sm"
    >
      <font-awesome-icon :icon="['fab', 'reddit']" class="brand-icon" />
      Subreddit
    </a>
    <a href="https://discord.com/invite/rph" target="_blank" class="btn-sm">
      <font-awesome-icon :icon="['fab', 'discord']" class="brand-icon" />
      Discord server
    </a>
    <a
      href="https://www.twitch.tv/programmerhumor"
      target="_blank"
      class="btn-sm"
    >
      <font-awesome-icon :icon="['fab', 'twitch']" class="brand-icon" /> Twitch
      channel
    </a>
  </div>
</template>
