<script>

export default {
    data() {
        return {
            links: ['Courses', 'Course Formats', 'Add Course', 'Pages', 'Demos'],
        }
    }
}

</script>

<template>
    <header class="main-header">
        <div class="container">
            <figure class="header-logo">
                <img src="/images/MasterStudy-1.svg" alt="">
            </figure>
            <nav class="header-nav">
                <ul class="nav__menu">
                    <li class="nav__item" v-for="link in links" :key="link">
                        <a href="#"> {{ link }} </a>
                    </li>
                </ul>
            </nav>
            <ul class="social">
                <li class="social__icon">
                    <a href="#">
                        <font-awesome-icon icon="fa-brands fa-linkedin" />
                    </a>
                </li>
                <li class="social__icon">
                    <a href="#">
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                    </a>
                </li>
                <li class="social__icon">
                    <a href="#">
                        <font-awesome-icon icon="fa-brands fa-facebook" />
                    </a>
                </li>
                <li class="social__icon">
                    <a href="#">
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                    </a>
                </li>


            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    padding: 30px 70px;
}

.header-logo img {
    width: 255px;
}

.header-nav {
    margin-left: auto;
}

.nav__menu,
.social {
    list-style: none;
    display: flex;
}

.nav__menu {
    gap: 28px;
    font-size: 18px;
    font-family: 'Roboto slab', serif;
    font-weight: 700;

    .nav__item {
        position: relative;
    }

    .nav__item:hover {
        color: $yellow;
        transition: color 300ms ease;
    }

    .nav__item:active::before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border: 4px solid transparent;
        border-top: 0;
        border-bottom: 7px solid $yellow;
        margin: 0 -3px -3px;
        position: absolute;
        top: 35px;
        left: 50%;
    }

    .nav__item:active::after {
        content: '';
        display: block;
        height: 3px;
        width: 100%;
        background-color: $yellow;
        position: absolute;
        top: 40px;

    }

    .nav__item:nth-child(3) a::after {
        content: 'new';
        text-transform: uppercase;
        font-size: 8px;
        color: white;
        background-color: $red;
        padding: 2px 5px;
        border-radius: 3px;
        position: absolute;
        right: -10px;
        top: -10px;
    }
}

.social {
    gap: 15px;
    font-size: 18px;
    line-height: 16px;

    .social__icon:hover {
        color: $yellow;
        transition: color 300ms ease;
    }
}
</style>
