<script>
import Hero from './Hero.vue';
import SubscribeBanner from './SubscribeBanner.vue';
import FounderPresentation from './FounderPresentation.vue'

export default {
    components: {
        Hero,
        SubscribeBanner,
        FounderPresentation
    }
}
</script>

<template>
    <main>
        <Hero />
        <SubscribeBanner class="subscribe" />
        <FounderPresentation />

    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.subscribe {
    position: relative;
    bottom: 160px;
}
</style>