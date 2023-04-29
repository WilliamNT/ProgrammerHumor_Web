<script setup lang="ts">
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faDiscord, faReddit, faTwitch } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import LogoImage from '../assets/site/logo.png';

    library.add(faDiscord);
    library.add(faReddit);
    library.add(faTwitch);
</script>

<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <img :src="LogoImage" alt="ProgrammerHumor logo" class="navbar-brand-logo">
            <span class="navbar-brand-name">r/ProgrammerHumor</span>
        </div>
        <ul class="navbar-items">
            <li class="navbar-item">
                <a href="https://www.reddit.com/r/ProgrammerHumor/" target="_blank">
                    <FontAwesomeIcon :icon="['fab', 'reddit']" class="icon" /> Subreddit
                </a>
            </li>
            <li class="navbar-item">
                <a href="https://discord.com/invite/rph" target="_blank">
                    <FontAwesomeIcon :icon="['fab', 'discord']" class="icon" /> Discord server
                </a>
            </li>
            <li class="navbar-item">
                <a href="https://www.twitch.tv/programmerhumor" target="_blank">
                  <FontAwesomeIcon :icon="['fab', 'twitch']" class="icon" /> Twitch channel
                </a>
            </li>
        </ul>
    </nav>
</template>