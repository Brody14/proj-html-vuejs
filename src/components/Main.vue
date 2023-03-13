<script>
import Hero from './Hero.vue';

export default {
    components: {
        Hero,
    }
}
</script>

<template>
    <main>
        <Hero />

    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
</style>