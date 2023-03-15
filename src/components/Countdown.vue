<script>

export default {
    data() {
        return {
            second: 0,
            minute: 0,
            hour: 0,
            day: 0,
        }
    },
    computed: {
        seconds() {
            return 1000
        },
        minutes() {
            return this.seconds * 60

        },
        hours() {
            return this.minutes * 60
        },
        days() {
            return this.hours * 24
        },
    },
    methods: {
        formatNum(num) {
            return num < 10 ? '0' + num : num
        },
        countdown() {
            const timer = setInterval(() => {
                const now = new Date().getTime()
                const finalDate = new Date('March 18, 2023 00:00:00').getTime()
                const gap = finalDate - now

                const displayDay = Math.floor(gap / this.days)
                const displayHour = Math.floor((gap % this.days) / this.hours)
                const displayMinutes = Math.floor((gap % this.hours) / this.minutes)
                const displaySeconds = Math.floor((gap % this.minutes) / this.seconds)
                this.day = this.formatNum(displayDay)
                this.hour = this.formatNum(displayHour)
                this.minute = this.formatNum(displayMinutes)
                this.second = this.formatNum(displaySeconds)

            }, 1000)
        }
    },
    mounted() {
        this.countdown()
    }
}
</script>

<template>
    <ul class="counter__days">
        <li class="counter-num">{{ day }}</li>
        <li class="counter-label">Days</li>
    </ul>
    <ul class="counter__hours">
        <li class="counter-num">{{ hour }}</li>
        <li class="counter-label">Hours</li>
    </ul>
    <ul class="counter__minutes">
        <li class="counter-num">{{ minute }}</li>
        <li class="counter-label">Minutes</li>
    </ul>
    <ul class="counter__seconds">
        <li class="counter-num">{{ second }}</li>
        <li class="counter-label">Seconds</li>
    </ul>
</template>

<style lang="scss" scoped>
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
</style>