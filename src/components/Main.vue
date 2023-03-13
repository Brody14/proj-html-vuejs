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
        <section class="hero">
            <div class="container">
                <Hero />
            </div>
        </section>
        <section class="subscribe-banner-section">
            <div class="container">
                <SubscribeBanner />
            </div>
        </section>
        <section class="founder-presentation">
            <div class="container">
                <FounderPresentation />
            </div>
        </section>

    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.hero {
    height: 820px;
    background-image: url("/images/slide-1.jpg");
    background-position: center;
}

.subscribe-banner-section {
    margin-bottom: -20px;
    position: relative;
    bottom: 160px;
}
</style>