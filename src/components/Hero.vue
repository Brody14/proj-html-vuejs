<script>
</script>

<template>
    <div class="hero-text">
        <h1 class="hero-text__title">
            Start your Human <span class="title-yellow">Revolution</span> today
        </h1>
        <p class="hero-text__paragraph">A wonderful serenity has taken possession on my entire soul, like these
            sweet
            mornings of spring which I
            enjoy with my whole heart.</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;


.hero-text {

    width: 730px;
    height: 680px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;


    .hero-text__title {
        font-size: 70px;
        font-family: 'Roboto slab', serif;
        font-weight: 700;
        line-height: 70px;
        margin-bottom: 40px;

        .title-yellow {
            color: $yellow;
        }
    }

    .hero-text__paragraph {
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        line-height: 35px;
        width: 570px;
    }
}

@media screen and (max-width: $bp-tablet) {
    .hero-text {
        width: 100%;
        height: 100%;
        padding-top: 72px;

        .hero-text__title {
            font-size: 40px;
            line-height: normal;
        }

        .hero-text__paragraph {
            width: 80%;
        }
    }

}
</style>