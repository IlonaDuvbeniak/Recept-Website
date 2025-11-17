<script>
import Header from './Header.vue';

export default {
  name: 'HeroSection',
  components: {
    Header,
  },
}
</script>
<template>
    <div class=layout-container-without-padding >
        <div class="hero-section">
            <Header class="header-component"/>
            <video class="hero-movie" muted loop>
                <source src="/videos/HeroMovie.mp4" type="video/mp4" aria-label="Girl sipping on spooky drink"/>
            </video>
            <img class="swirl-text" src="/img/swirl-text.svg"></img>
        </div>
    </div>
</template>
<style scoped>

.hero-movie {
    width: 100%;
    height: auto;
}
.hero-section {
    margin-bottom: 10px;
    /* background-color: aqua; */
}
.header-component {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.swirl-text {
    position: relative;
    margin-top: -400px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
