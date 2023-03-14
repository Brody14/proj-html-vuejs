<template>
    <div class="slider">

        <div class="slider__img">
            <img src="/images/1-100x100.jpg" alt="">
            <img class="active" src="/images/2-100x100.jpg" alt="">
            <img src="/images/4-100x100.jpg" alt="">

            <div class="slider__handle">
                <font-awesome-icon class="arrow arrow-left" icon="fa-solid fa-arrow-left" />
                <font-awesome-icon class="arrow arrow-right" icon="fa-solid fa-arrow-right" />
            </div>
        </div>
        <div class="slider-text">
            <h4 class="slider__title">Paints of the Future</h4>

            <ul class="slider__icon">
                <li v-for="n in 5" :key="n">
                    <font-awesome-icon icon="fa-solid fa-star" />
                </li>
            </ul>

            <p class="slider__description">The response to your MasterStudy has been really overwhelming! Those who
                participated
                in the workshop are spreading the word here on campus and the "buzz" is on. The VP of
                Instruction wants you to come back! Her goal is to have more faculty trained. She also
                wants to attend a workshop herself. Our President told me Masterstudy needs to be the
                cornerstone of our success program.</p>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.slider {

    .arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 25px;

        &.arrow-left {
            left: 75px;
        }

        &.arrow-right {
            right: 75px;
        }
    }

    .slider__img {
        position: relative;
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-bottom: 50px;



        & img {
            border-radius: 999px;
            aspect-ratio: 1/1;
            width: 70px;
        }

        img.active {
            transform: scale(1.5);
        }
    }

    .slider-text {
        text-align: center;

        .slider__title {
            font-size: 22px;
            font-family: 'Roboto slab', serif;
            font-weight: 700;
            margin-bottom: 7px;
        }

        .slider__icon {
            display: flex;
            justify-content: center;
            color: $yellow;
            font-size: 16px;
            list-style: none;
            gap: 3px;
            margin-bottom: 40px;
        }

        .slider__description {
            font-family: 'Open Sans', sans-serif;
            font-size: 18px;
            line-height: 40px;
        }
    }
}
</style>