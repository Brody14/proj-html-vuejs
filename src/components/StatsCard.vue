<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
        },
    }
}
</script>

<template>
    <div class="card">
        <div class="card__icon">
            <font-awesome-icon :icon="card.icon" />
        </div>
        <div class="card__text">
            <h5 class="card__title">{{ card.number }}</h5>
            <p class="card__description">{{ card.label }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.card {

    display: flex;
    gap: 30px;
    font-family: 'Roboto slab', serif;
    font-weight: 700;
    color: white;

    &__icon {
        font-size: 65px;
    }

    &__title {
        font-size: 40px;
        color: $yellow;
    }

    &__description {
        font-size: 18px;
    }
}

@media screen and (max-width: $bp-tablet) {
    .card {
        display: block;
        text-align: center;
    }

    .card .card__icon {
        margin-bottom: 15px;
    }
}
</style>