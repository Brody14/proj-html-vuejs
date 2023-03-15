<template>
    <div class="ad">
        <h2 class="ad__title">Get My Exclusive Investing Book just for $19.50</h2>
        <p class="ad__description">Vestibulum imentum eu urna vel cursus. Aenean vehicula quam quam, vitae pellentesque urna
            elementum cursus.</p>
        <img class="ad__button" src="/images/amazon.png" alt="">

    </div>
    <div class="ad-image">
        <img class=" ad__img" src="/images/book.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.ad {
    flex-basis: 50%;
    text-align: center;
    padding: 60px 0;

    &__title {
        color: $yellow;
        font-size: 45px;
        font-family: 'Roboto', serif;
        font-weight: 700;
        line-height: 50px;
    }

    &__description {
        color: white;
        font-family: 'Open Sans', sans-serif;
        font-size: 28px;
        font-style: italic;
    }

    &__title,
    &__description {
        margin-bottom: 40px;
    }

    &__button {
        margin: 0 auto;
        cursor: pointer;
    }
}

.ad-image {
    flex-basis: 50%;
}

@media screen and (max-width: $bp-tablet) {

    .ad {
        padding: 30px 0;
    }

    .ad .ad__description,
    .ad-image {
        display: none;
    }

    .ad .ad__title {
        font-size: 25px;
        padding: 0 50px;
        line-height: normal;
    }
}
</style>