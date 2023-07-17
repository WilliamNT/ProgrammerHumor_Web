<script setup lang="ts">
    import TempAvatar from '../assets/user/user_pfp.png';
    import ProjectPost from '../components/ProjectPost.vue';
</script>

<template>
    <section :class="[$style.projectsList]">

       <ProjectPost :avatar="TempAvatar" username="Somebody" title="Post title" description="Post description" thumbnail="https://placehold.co/600x400" :tags="['Ideas', 'In Progress']"/>

    </section>
</template>

<style module lang="scss">
    .projectsList {
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: .65rem;
        max-width: 900px;
        padding: 1rem;
    }
</style>