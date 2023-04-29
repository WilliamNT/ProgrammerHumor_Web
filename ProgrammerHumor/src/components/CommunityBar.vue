<script setup lang="ts">
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faDiscord, faReddit, faTwitch } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    library.add(faDiscord);
    library.add(faReddit);
    library.add(faTwitch);
</script>

<template>
    <ul class="community-bar">
        <a href="https://www.reddit.com/r/ProgrammerHumor/" target="_blank" class="community-bar-item">
            <FontAwesomeIcon :icon="['fab', 'reddit']" class="icon" /> Subreddit
        </a>
        <a href="https://discord.com/invite/rph" target="_blank" class="community-bar-item">
            <FontAwesomeIcon :icon="['fab', 'discord']" class="icon" /> Discord server
        </a>
        <a href="https://www.twitch.tv/programmerhumor" target="_blank" class="community-bar-item">
            <FontAwesomeIcon :icon="['fab', 'twitch']" class="icon" /> Twitch channel
        </a>
    </ul>
</template>