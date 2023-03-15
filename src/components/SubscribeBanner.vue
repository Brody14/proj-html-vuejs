<script>
import Countdown from './Countdown.vue'

export default {
    components: {
        Countdown,
    }
}
</script>

<template>
    <div class="row">
        <div class="banner">
            <div class="banner-text">
                <h2 class="banner__title">
                    <span class="banner__title-white">Limited Sale:</span>
                    All courses with 55% off
                </h2>
            </div>
            <div class="banner-input">
                <input class="banner-input__text" type="email" placeholder="Enter your e-mail"
                    onfocus="this.placeholder = ''" onblur="this.placeholder='Enter your e-mail'">
                <button class="banner-input__button">subscribe</button>
            </div>
        </div>
        <div class="counter">
            <Countdown />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.row {
    display: flex;
    background-color: $yellow;
    padding: 50px 65px;
    font-family: 'Roboto slab', serif;
    font-weight: 700;
    border-radius: 10px;
    gap: 30px;
}

.banner {
    flex-basis: 50%;


    .banner__title {
        font-size: 32px;
        margin-bottom: 40px;

        .banner__title-white {
            color: white;
        }
    }

    .banner-input {
        position: relative;


        .banner-input__text,
        .banner-input__button {
            padding: 24px;
            border-radius: 999px;
            border: none;

        }

        .banner-input__text {
            width: 100%;
        }

        .banner-input__button {
            text-transform: uppercase;
            font-family: 'Roboto slab', serif;
            font-weight: 700;
            color: white;
            font-size: 14px;
            background-color: $dark-grey;
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
        }

        .banner-input__text:focus {
            outline: none;
        }
    }

}

.counter {
    display: flex;
    flex-basis: 50%;
    gap: 45px;
    padding: 0 50px;
}
</style>