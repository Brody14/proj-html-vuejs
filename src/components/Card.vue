<script>

export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    }

}
</script>

<template>
    <div class="card">
        <div class="card-header">
            <figure class="card-header__img">
                <img :src="card.imgSrc" :alt="card.title">
            </figure>
            <div class="prices">
                <span class="original-price">{{ card.originalPrice }}</span>
                <span class="price">{{ card.price }}</span>

            </div>
        </div>
        <div class="card-body">
            <h3 class="card-body__title">
                <a href="#">{{ card.title }}</a>
            </h3>
            <h4 class="card-body__subtitle">{{ card.type }}</h4>
            <div class="card-footer">
                <ul class="card-footer__details">
                    <li class="card-footer__item">
                        <font-awesome-icon icon="fa-solid fa-signal" />
                        <span class="card-footer__text">{{ card.level }}</span>
                    </li>
                    <li class="card-footer__item">
                        <font-awesome-icon icon="fa-solid fa-list-ul" />
                        <span class="card-footer__text">{{ card.lectures }}</span>
                    </li>
                    <li class="card-footer__item">
                        <font-awesome-icon icon="fa-regular fa-clock" />
                        <span class="card-footer__text">{{ card.time }}</span>
                    </li>

                </ul>
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.card {
    transition: box-shadow 300ms ease;

    &:nth-child(-n+3) .card-header::before {
        content: 'special';
        text-transform: uppercase;
        color: white;
        font-size: 11px;
        background-color: $orange;
        padding: 8px;
        border-radius: 3px;
        position: absolute;
        right: 8px;
        top: 8px;
        z-index: 999;

    }


    &:hover {
        box-shadow: 0px -2px 10px 6px #dedede;
    }

    &:hover .card-header__img img {
        filter: brightness(0.4) sepia(0.3);
    }

    &:hover .card-header .prices {
        opacity: 1
    }

    .card-header {
        position: relative;

        .card-header__img img {
            width: 370px;
            height: 240px;
            transition: filter 200ms ease-in-out;
        }

        .prices {
            font-family: 'Roboto slab', serif;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;


            .original-price {
                font-size: 20px;
                color: $text-grey;
                text-decoration: line-through;
                font-weight: 400;
                margin-right: 10px;
            }

            .price {
                color: $yellow;
                font-size: 25px;
                font-weight: 700;
            }

        }
    }


    .card-body {
        background-color: white;
        border: 1px solid $text-grey;
        width: 370px;
        padding: 36px 20px 20px;
        text-align: center;

        &__title {
            font-size: 20px;
            font-family: 'Roboto slab', serif;
            font-weight: 700;
            transition: color 250ms ease-in-out;

            &:hover {
                color: $yellow;
            }

            & a {
                line-height: 30px;
            }
        }

        &__subtitle {
            font-family: 'Open Sans', sans-serif;
            font-size: 15px;
            font-weight: 400;
            color: $text-grey;
        }

        &__title,
        &__subtitle {
            margin-bottom: 20px;
        }
    }

    .card-footer::before {

        content: '';
        display: block;
        height: 1px;
        width: 80%;
        background-color: $text-grey;
        margin: 0 auto;
    }

    .card-footer__details {
        padding-top: 20px;
        list-style: none;
        display: flex;
        gap: 30px;

        .card-footer__item {
            color: $yellow;
            margin-right: 5px;

            .card-footer__text {
                margin-left: 5px;
                color: black;
                font-size: 13px;
                font-family: 'Open Sans', sans-serif;
            }
        }
    }

}

@media screen and (max-width: $bp-tablet) {

    .card .card-header .card-header__img img,
    .card .card-body {
        width: 340px;
        margin: 0 auto;
    }

    .card .card-header .card-header__img img {

        filter: brightness(0.4) sepia(0.3);
    }


    .card .card-header .prices {
        opacity: 1;
    }

    .card-footer .card-footer__details {
        gap: 17px;
        justify-content: space-between;
    }

}
</style>