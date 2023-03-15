<script>
import Hero from './Hero.vue';
import SubscribeBanner from './SubscribeBanner.vue';
import FounderPresentation from './FounderPresentation.vue'
import Card from './Card.vue';
import Advertising from './Advertising.vue';
import InfoCard from './InfoCard.vue';
import StatsCard from './StatsCard.vue'
import Review from './Review.vue'

export default {
    components: {
        Hero,
        SubscribeBanner,
        FounderPresentation,
        Card,
        Advertising,
        InfoCard,
        StatsCard,
        Review
    },
    data() {
        return {
            cards: [
                {
                    imgSrc: '/images/photo-1496307042754-b4aa456c4a2d-370x200.jpeg',
                    title: 'How to be a DJ? Make Electronic Music',
                    type: 'Electronic',
                    originalPrice: '$59.99',
                    price: '$49.99',
                    level: 'Advanced',
                    lectures: '3 lectures',
                    time: '20 hours'

                },
                {
                    imgSrc: '/images/12345-1-370x200.png',
                    title: 'NVIDIA and UE4 Technologies Practice',
                    type: 'Nvidia',
                    originalPrice: '$60.99',
                    price: '$45.99',
                    level: 'Advanced',
                    lectures: '8 lectures',
                    time: '6 hours'
                },
                {
                    imgSrc: '/images/photo-1491897554428-130a60dd4757-370x200.jpeg',
                    title: 'Fashion Photography from professional',
                    type: 'Fashion',
                    originalPrice: '$50.99',
                    price: '$25.99',
                    level: 'Advanced',
                    lectures: '6 lectures',
                    time: '6 hours'
                },
                {
                    imgSrc: '/images/photo-1416339134316-0e91dc9ded92-370x200.jpeg',
                    title: 'Design Instrument for Communication',
                    type: 'Communication',
                    originalPrice: '$90.99',
                    price: '$45.99',
                    level: 'Intermediate',
                    lectures: '6 lectures',
                    time: '6 hours'
                },
                {
                    imgSrc: '/images/cathryn-lavery-67852-unsplash-370x200.jpg',
                    title: 'Make your Concept Right and Beautiful',
                    type: 'Art',
                    originalPrice: '$70.99',
                    price: '$30.99',
                    level: 'Intermediate',
                    lectures: '6 lectures',
                    time: '6 hours'
                },
                {
                    imgSrc: '/images/photo-1475452779376-caebfb988090-370x200.jpeg',
                    title: 'Road Bike Manual or How to Be a Champion',
                    type: 'Bicycling',
                    originalPrice: '$20.99',
                    price: '$9.99',
                    level: 'Beginner',
                    lectures: '6 lectures',
                    time: '6 hours'
                },

            ],
            infoCards: [
                {
                    icon: "fa-solid fa-briefcase",
                    title: 'Entrepreneurship',
                    description: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate'
                },
                {
                    icon: "fa-solid fa-rocket",
                    title: 'Accelerated learning',
                    description: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate'
                },
                {
                    icon: "fa-solid fa-thumbs-up",
                    title: 'Productivity',
                    description: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate'
                },
                {
                    icon: "fa-solid fa-gear",
                    title: 'Life Coaching',
                    description: 'Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate'
                }
            ],
            statsCards: [
                {
                    icon: "fa-solid fa-users",
                    number: '7500',
                    label: 'Online Learner'
                },
                {
                    icon: "fa-solid fa-film",
                    number: '55',
                    label: 'Video Courses'
                },
                {
                    icon: "fa-solid fa-image",
                    number: '1025',
                    label: 'Sliders and Images'
                },
                {
                    icon: "fa-solid fa-thumbs-up",
                    number: '3380',
                    label: 'Excellent Reviews'
                },
            ],
            images: ["/images/1-100x100.jpg", "/images/2-100x100.jpg", "/images/4-100x100.jpg"],
            slides: [
                {
                    title: 'Come as you are',
                    content: 'MasterStudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. I am looking forward to attending the On Course MasterStudy and the MasterStudy National Conference next year and facilitating the use of this excellent retention/student success course at my college.'
                },
                {
                    title: 'Paints of the Future',
                    content: 'The response to your MasterStudy has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the "buzz" is on. The VP of Instruction wants you to come back! Her goal is to have more faculty trained. She also wants to attend a workshop herself. Our President told me MasterStudy needs to be the cornerstone of our success program.'
                },
                {
                    title: 'Investing for Your Future',
                    content: 'It is no exaggeration to say this MasterStudy experience was transformative-both professionally and personally. This workshop will long remain a high point of my life. Thanks again.... I am feeling energized and eager to start teaching my class next week. I can\'t wait to use all of my new teaching tools. I will absolutely recommend this workshop to Other educators!'
                }
            ]
        }
    },

}
</script>

<template>
    <main class="main-content">
        <section class="hero-section">
            <div class="container">
                <Hero />
            </div>
        </section>
        <section class="subscribe-banner-section">
            <div class="container">
                <SubscribeBanner />
            </div>
        </section>
        <section class="founder-presentation-section">
            <div class="container">
                <FounderPresentation />
            </div>
        </section>
        <section class="courses-section">
            <h2 class="courses-section__title"> New Courses</h2>
            <div class="container grid-container">
                <Card v-for="item in cards" :key="item.title" :card="item" />
            </div>
            <div class="container">
                <button class="btn-yellow">
                    <a href="#">load more</a>
                </button>
            </div>
        </section>
        <section class="advertising-section">
            <div class="container">
                <Advertising />
            </div>
        </section>
        <section class="info-section">
            <div class="container">
                <h2 class="info__title">Why my Courses&quest;</h2>
                <div class="container-grid">
                    <InfoCard v-for="item in infoCards" :key="item.title" :card="item" />
                </div>
            </div>
        </section>
        <section class="stats-section">
            <div class="container">
                <StatsCard v-for="item in statsCards" :key="item.label" :card="item" />
            </div>
        </section>
        <section class="review-section">
            <div class="container">
                <h2 class="review-section__title">What Students Say</h2>
                <Review :image="images" :slide="slides" />
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.main-content {
    overflow: hidden;
}

.hero-section {
    height: 820px;
    background-image: url("/images/slide-1.jpg");
    background-position: center;
}

.subscribe-banner-section {
    margin-bottom: -20px;
    position: relative;
    bottom: 160px;
}



.courses-section {
    background-color: $light-grey;
    padding: 70px;

    .container.grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        margin: 0 auto;
        padding: 50px 70px;
    }

    .courses-section__title {
        font-family: 'Roboto slab', serif;
        font-weight: 700;
        font-size: 50px;
        text-align: center;
        margin-bottom: 10px;
    }

    .container {
        display: flex;
        justify-content: center;


        .btn-yellow {
            text-transform: uppercase;
            background-color: $yellow;
            border: none;
            border-radius: 999px;
            color: white;
            font-family: 'Roboto slab', serif;
            font-weight: 700;
            font-size: 14px;
            margin-bottom: 20px;
            z-index: 1;
            position: relative;
            transition: box-shadow 300ms linear;
            overflow: hidden;


            &::before {
                content: '';
                background-color: #d9a61b;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                transition: width 250ms ease-in-out;
                width: 0;
                height: 100%;
            }

            &:hover::before {
                width: 100%;
            }

            & a {
                line-height: 50px;
                padding: 15px 25px;
            }
        }
    }
}

.advertising-section {
    background-image: url('/images/slider_1-1917x607-1914x606.jpg');
    background-position: center;
    background-size: cover;

    .container {
        display: flex;
        justify-content: center;
        padding: 50px 0 0;
    }
}

.info-section .container {
    padding: 85px 70px;

    .info__title {
        font-size: 50px;
        font-family: 'Roboto slab', serif;
        font-weight: 700;
        text-align: center;
        margin-bottom: 70px;
    }

    .container-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
}

.stats-section {
    background-image: url('/images/counter-1919x1101.jpg');
    background-position: top;

    .container {
        display: flex;
        gap: 65px;
        justify-content: center;
        padding: 270px 0;
    }
}

.review-section {
    &__title {
        font-size: 50px;
        font-family: 'Roboto slab', serif;
        font-weight: 700;
        text-align: center;
        margin-bottom: 60px;
    }

    .container {
        max-width: 765px;
        padding: 100px 0;
    }
}

@media screen and (max-width: $bp-tablet) {
    .subscribe-banner-section {
        bottom: 280px;
        margin-bottom: -160px
    }

    .courses-section {
        padding: 30px 15px;

        .container.grid-container {
            grid-template-columns: 1fr;
            padding: 30px 15px
        }
    }

    .advertising-section .container {
        display: block;
        padding: 0;
    }

    .info-section .container {
        padding-left: 15px;
        padding-right: 15px;

    }

    .info-section .container .container-grid {
        grid-template-columns: 1fr;
    }

    .stats-section .container {
        flex-direction: column;
        padding-top: 30px;
        padding-bottom: 30px;

    }

    .review-section .container {
        padding: 30px 15px;
    }

}
</style>