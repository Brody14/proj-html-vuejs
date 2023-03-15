<script>

export default {
    data() {
        return {
            menuAbout:
            {
                title: 'about',
                links: [
                    'Masterstudy is Education WordPress theme featured by Learning',
                    'Management System (LMS) for online education.',
                    'Developed by StylemixThemes.',
                ],
                icons: ['fa-brands fa-facebook', 'fa-brands fa-twitter', 'fa-brands fa-instagram']

            },
            menuContact: {
                title: 'contact',
                links: [
                    'USA, Callifornia 20, First Avenue, Callifornia',
                    'Tel.: +1 212 458 300 32',
                    'Fax: +1 212 375 24 14',
                    'info@masterstudy.com'
                ],
            },
            menuPages: {
                title: 'pages',
                links1: ['Blog', 'Home', 'Typography'],
                links2: ['Courses', 'Shortcodes', 'Membership L...']
            },
            blogs: [
                {
                    image: '/images/photo-1490376840453-5f616fbebe5b-75x75.jpeg',
                    title: ' Our main target is to "Developing Yourself as a Leader"',
                    date: '— August 9, 2018',
                },
                {
                    image: '/images/photo-1517520287167-4bbf64a00d66-75x75.jpeg',
                    title: 'Those Other College Expenses You Aren\'t Thinking About',
                    date: ' — June 3, 2015'
                }
            ]

        }
    }
}

</script>

<template>
    <footer class="main-footer">
        <div class="container">
            <section class="about">
                <ul class="menu">
                    <h3 class="menu__title">{{ menuAbout.title }}</h3>
                    <li class="menu__item" v-for="link in menuAbout.links" :key="link"> {{ link }}</li>
                </ul>
                <ul class="icon-wrapper">
                    <li class="icon" v-for="item in menuAbout.icons" :key="item">
                        <a href="#">
                            <font-awesome-icon :icon="item" />
                        </a>
                    </li>
                </ul>
            </section>
            <section class="contact">
                <ul class="menu">
                    <h3 class="menu__title">{{ menuContact.title }}</h3>
                    <li class="menu__item" v-for="link in menuContact.links" :key="link"> {{ link }}</li>
                </ul>
            </section>
            <section class="pages">
                <h3 class="menu__title">{{ menuPages.title }}</h3>
                <div class="menu-wrapper">
                    <ul class="menu">
                        <li class="menu__item" v-for="item in menuPages.links1" :key="item">
                            <a href="#">{{ item }}</a>
                        </li>
                    </ul>
                    <ul class="menu">
                        <li class="menu__item" v-for="item in menuPages.links2" :key="item">
                            <a href="#"> {{ item }} </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="blog">
                <h3 class="menu__title">Blog</h3>
                <div class="card" v-for="item in blogs">
                    <div class="card-img">
                        <a href="#">
                            <img :src="item.image" alt="">
                        </a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-body__title">
                            <a href="#"> {{ item.title }}</a>
                        </h5>
                        <span class="card-body__date">
                            {{ item.date }}
                        </span>
                    </div>
                </div>

            </section>
        </div>

    </footer>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.main-footer {
    background-color: $yellow;
    color: #333333;

    .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 60px 60px 45px;
    }
}

.menu__title {
    text-transform: uppercase;
    font-family: 'Roboto slab', serif;
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 30px;
}

.menu__item {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
}

.menu__item:not(.about .menu__item, .contact .menu__item:nth-child(3), :last-child),
.about .menu {
    margin-bottom: 20px;
}

.menu__item:not(.pages .menu__item),
.icon-wrapper {
    list-style: none;
}

.contact {
    .menu .menu__item:last-child {
        cursor: pointer;
        font-size: 13px;
    }
}

.pages {

    .menu-wrapper {
        display: flex;
        gap: 30px;

        .menu__item {
            font-family: 'Roboto slab', serif;
            margin-left: 20px;
            transition: color 300ms ease;

            &::marker {
                font-size: 12px;
            }
        }
    }

}

.icon-wrapper,
.card {
    display: flex;
    gap: 20px
}

.icon {
    font-size: 20px;
    transition: color 300ms ease;
}

.card {
    margin-bottom: 30px;

    &:last-child {
        margin-bottom: 0;
    }

    .card-img {
        flex-basis: 51%;
    }

    .card-body__title {
        font-family: 'Roboto slab', serif;
        font-weight: 700;
        font-size: 16px;
        transition: color 300ms ease;
    }

    .card-body__date {
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
    }
}

.icon:hover,
.card-body__title:hover,
.pages .menu__item:hover {
    color: white;
}

@media screen and (max-width: $bp-tablet) {
    .main-footer .container {
        grid-template-columns: 1fr;
        padding: 60px 15px;
        gap: 30px
    }

    .contact .menu .menu__item:last-child {
        font-size: 16px;
    }

    .pages .menu-wrapper {
        display: block;
    }

    .pages .menu-wrapper .menu {
        margin-bottom: 15px;
    }

    .card {
        gap: 0
    }
}
</style>