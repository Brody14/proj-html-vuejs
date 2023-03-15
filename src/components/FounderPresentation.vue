<script></script>

<template>
    <div class="row">
        <div class="founder">
            <p class="founder__text">Hey there, my name is
                John Doe. I'm the founder
                of the Brain Academy.</p>
            <figure class="founder-sign">
                <img src="/images/sign.jpg" alt="">
            </figure>

        </div>
        <div class="founder-quote">
            <p class="founder-quote__text">A wonderful serenity has taken possession of my entire soul, like these
                sweet
                mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm
                of existence in this spot, which was created for the bliss of souls like mine. I am so
                happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence,
                that I neglect my talents. When, while the lovely valley teems with vapour around me,
                and the meridian sun strikes the upper surface of the impenetrable foliage of my
                trees, and but a few stray gleams steal into the inner sanctuary</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.row {
    display: flex;
    padding: 0 65px 100px;
    gap: 100px;

    .founder {
        flex-basis: 40%;

        .founder__text {
            font-family: 'Roboto slab', serif;
            font-weight: 700;
            font-size: 35px;
            margin-bottom: 50px;
        }

        .founder-sign img {
            margin: 0 auto;
        }
    }

    .founder-quote {
        flex-basis: 60%;

        .founder-quote__text {
            font-family: 'Open Sans', sans-serif;
            font-size: 15px;
            line-height: 33px;
        }
    }

}

@media screen and (max-width: $bp-tablet) {
    .row {
        display: block;
        padding: 0 0 100px;
    }

    .founder {
        margin-bottom: 30px;
    }
}
</style>