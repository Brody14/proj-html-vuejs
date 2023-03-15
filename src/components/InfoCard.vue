<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="card__icon">
            <font-awesome-icon :icon="card.icon" />
        </div>
        <div class="card__text">
            <h5 class="card__title">{{ card.title }}</h5>
            <p class="card__description">{{ card.description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.card {
    padding: 55px 40px;
    display: flex;
    gap: 30px;
    width: 560px;
    height: 270px;
    box-shadow: 0px 4px 10px 0px #dedede;
    background-color: white;
    position: relative;
    transition: background-color 300ms ease-out;

    &:hover {
        background-color: $yellow;
    }

    &:hover &__icon {
        color: white;
    }

    &:hover &__description {
        color: black;
    }

    &::before {
        content: '';
        display: block;
        width: 5px;
        height: 100%;
        background-color: $yellow;
        position: absolute;
        top: 0;
        left: 0;
    }

    &__title {
        font-family: 'Roboto slab', serif;
        font-weight: 700;
        font-size: 26px;
        margin-bottom: 25px;
        line-height: 24px;
    }

    &__description {
        font-size: 15px;
        font-family: 'Open Sans', sans-serif;
        color: $text-grey;
        line-height: 30px;
    }

    &__icon {
        color: $yellow;
        font-size: 56px;
    }
}

@media screen and (max-width: $bp-tablet) {

    .card {
        width: 340px;
        height: 400px;
        display: block;
        padding-top: 30px;
    }

    .card .card__icon {
        margin-bottom: 20px;
    }
}
</style>