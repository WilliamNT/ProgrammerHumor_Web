<script setup lang="ts">
    const props = defineProps<{
        title: string;
        description: string;
        avatar: string;
        username: string;
        thumbnail: string;
        tags: string[];
    }>();
</script>

<template>
    <div :class="[$style.project]">
        <div :class="[$style.project__header]">
            <div :class="[$style.project__authorInfo]">
                <img :class="[$style.project__authorInfo__avatar]" :src="avatar" :alt="`${title}'s avatar image`">
                <p :class="[$style.project__authorInfo__username]">{{ username }}</p>
            </div>
            <div :class="[$style.project__tags]">
                <span :class="[$style.project__tags__tag]" v-for="tag in tags">{{ tag }}</span>
            </div>
        </div>
        <div :class="[$style.project__body]">
            <div :class="[$style.project__details]">
                <h3 :class="[$style.project__details__title]">{{ title }}</h3>
                <p :class="[$style.project__details__description]">{{ description }}</p>
            </div>
            <img :class="[$style.project__thumbnail]" :src="thumbnail" :alt="`${title}'s thumbnail image`">
        </div>
    </div>
</template>

<style module lang="scss">
    @use "../scss/main.scss" as *;

    .project {
        background-color: white;
        border: 1px solid #CCCCCC;
        border-radius: .7rem;
        overflow: hidden;

        &__header {
            display: flex;
            gap: 1rem;
            padding: .6rem;
            background-color: #F7F9FA;
            justify-content: space-between;
        }

        &__authorInfo {
            display: flex;
            gap: .7rem;
            align-items: center;

            &__avatar {
                width: 1.6rem;
                height: 1.6rem;
                aspect-ratio: 1/1;
                border-radius: 50%;
            }

            &__username {
                font-size: .8rem;
                font-weight: 600;
                color: $text_muted;
                margin: 0;
            }
        }

        &__tags {
            display: flex;
            gap: .5rem;

            &__tag {
                font-size: .7rem;
                background-color: $rph_orange;
                padding: .3rem .6rem;
                border-radius: 1rem;
                color: white;
                height: fit-content;
            }
        }

        &__body {
            display: flex;
            justify-content: space-between;
        }

        &__details {
            display: flex;
            flex-direction: column;
            gap: .5rem;
            padding: .7rem;

            &__title {
                margin: 0;
                font-size: 1.1rem;
                font-weight: 600;
            }

            &__description {
                margin: 0;
                font-size: .8rem;
                color: $text_muted;
            }
        }

        &__thumbnail {
            width: auto;
            height: 100px;
        }
    }
</style>