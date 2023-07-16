<script setup lang="ts">
    import LogoImage from '../assets/site/logo.png';
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
                    Subreddit
                </a>
            </li>
            <li class="navbar-item">
                <a href="https://www.reddit.com/r/ProgrammerHumor/wiki/index/" target="_blank">
                    Wiki
                </a>
            </li>
            <li class="navbar-item">
                <a href="https://www.reddit.com/message/compose?to=/r/ProgrammerHumor" target="_blank">
                    Modmail
                </a>
            </li>
            <li class="navbar-item">
                <RouterLink :to="{ name: 'projects' }" >Community Projects</RouterLink>
            </li>
        </ul>
    </nav>
</template>