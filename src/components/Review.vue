<script>

export default {
    props: {
        image: {
            type: Array,
            required: true
        },
        slide: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            currentIndex: 0,
        }
    },
    methods: {
        next() {
            const lastSlide = this.image.length - 1

            if (this.currentIndex != lastSlide) this.currentIndex++
        },
        prev() {
            if (this.currentIndex != 0) this.currentIndex--
        }
    }
}

</script>

<template>
    <div class="slider">

        <div class="slider-header">
            <figure class="slider__image">
                <img v-for="(item, index) in image" :key="item" :src="item"
                    :class="(index === currentIndex) ? 'active' : ''" alt="">
            </figure>

            <div class="slider__handle">
                <font-awesome-icon class="arrow arrow-left" icon="fa-solid fa-arrow-left" @click="prev" />
                <font-awesome-icon class="arrow arrow-right" icon="fa-solid fa-arrow-right" @click="next" />
            </div>
        </div>
        <div class="slider-footer">
            <div class="slider__text" v-for="(item, index) in slide" :key="item"
                :class="(index === this.currentIndex) ? 'active' : ''">
                <h4 class="slider__title"> {{ item.title }}</h4>

                <ul class="slider__icon">
                    <li v-for="n in 5" :key="n">
                        <font-awesome-icon icon="fa-solid fa-star" />
                    </li>
                </ul>

                <p class="slider__description">{{ item.content }}</p>
            </div>
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
        cursor: pointer;

        &.arrow-left {
            left: 75px;
        }

        &.arrow-right {
            right: 75px;
        }
    }

    .slider-header {
        position: relative;
        margin-bottom: 50px;

        .slider__image {

            display: flex;
            justify-content: center;
            gap: 30px;

            & img {
                border-radius: 999px;
                aspect-ratio: 1/1;
                width: 70px;
            }

            img.active {
                transform: scale(1.5);
            }
        }

    }

    .slider-footer {
        text-align: center;

        .slider__text {
            display: none;
        }

        .slider__text.active {
            display: block;
        }

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