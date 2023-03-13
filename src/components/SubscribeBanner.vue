<template>
    <section class="subscribe-banner-section">
        <div class="container">
            <div class="row">
                <div class="banner">
                    <div class="banner-text">
                        <h2 class="banner__title">
                            <span class="banner__title-white">Limited Sale:</span>
                            All courses with 55% off
                        </h2>
                    </div>
                    <div class="banner-input">
                        <input class="banner-input__text" type="email" value="Enter your e-mail">
                        <button class="banner-input__button">subscribe</button>
                    </div>
                </div>
                <div class="counter">
                    <ul class="counter__days">
                        <li class="counter-num">02</li>
                        <li class="counter-label">Days</li>
                    </ul>
                    <ul class="counter__hours">
                        <li class="counter-num">15</li>
                        <li class="counter-label">Hours</li>
                    </ul>
                    <ul class="counter__minutes">
                        <li class="counter-num">40</li>
                        <li class="counter-label">Minutes</li>
                    </ul>
                    <ul class="counter__seconds">
                        <li class="counter-num">23</li>
                        <li class="counter-label">Seconds</li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.subscribe-banner-section {
    margin-bottom: -20px;
}

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
    flex-basis: 50%;
    display: flex;
    gap: 45px;
    padding: 0 50px;

    .counter__days,
    .counter__hours,
    .counter__minutes,
    .counter__seconds {
        list-style: none;
        text-align: center;
    }

    .counter-num {
        color: white;
        font-size: 70px;
    }

    .counter-label {
        font-family: 'Roboto slab', serif;
        font-weight: 700;
        font-size: 20px;
    }
}
</style>