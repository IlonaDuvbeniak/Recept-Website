<script>
import Header from './Header.vue';
import Button from './Button.vue';

export default {
    name: 'HeroSection',
    components: {
        Header,
        Button
    },
}
</script>
<template>
    <Header class="header-component"></Header>
    <div class="hero-section">
        <video class="hero-movie" autoplay muted loop>
            <source src="/videos/HeroMovie.mp4" type="video/mp4" aria-label="Girl sipping on spooky drink" />
        </video>

        <div class="title-and-button">
            <h1>CHEERS <br>WITCHES!</h1>
            <Button to="/recipes/category/boos-and-brews" btnText="Boo season!" variant="primary" :showArrow="true"
                :disabled="false"></Button>
        </div>
        <img class="swirl-text" src="/img/swirl-text.svg" alt="Banner saying Spooky season is here">
    </div>
</template>
<style scoped>
.hero-section {
    margin-bottom: 0px;
}

.hero-movie {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
}

.swirl-text {
    position: relative;
    margin-top: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
}

h1 {
    color: var(--red-color);
    font-family: "Kalnia";
    font-size: 88px;
    line-height: 1;
    margin-bottom: 32px;
}

.title-and-button {
    position: relative;
    left: 60%;
    margin-top: 200px;
}

.header-component {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
}
</style>
