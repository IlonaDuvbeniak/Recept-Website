<script>
import Header from './Header.vue';
import Button from './Button.vue';

export default {
    name: 'HeroSection',
    components: {
        Header,
        Button
    },
    data() {
        return {
            isPlaying: true
        }
    },

    mounted() {
        const video = this.$refs.heroVideo;
        if (video) {
            video.play().catch(() => {
                this.isPlaying = false;
            });
        }
    },
    methods: {
        togglePlayPauseOnVideo() {
            const video = this.$refs.heroVideo
            if (this.isPlaying) {
                video.pause()
                this.isPlaying = false
            } else {
                video.play()
                this.isPlaying = true
            }
        }
    }
}
</script>
<template>
    <Header class="header-component"></Header>
    <div class="hero-section">
        <video class="hero-movie" autoplay muted loop ref="heroVideo"
            aria-label="Looping background video of a girl sipping on a spooky drink. No audio.">
            <source src="/videos/HeroMovie_desktop.mp4" type="video/mp4" />
        </video>
        <button class="hero-video-toggle" @click="togglePlayPauseOnVideo"
            :aria-label="isPlaying ? 'Pause video' : 'Play video'">
            <span v-if="isPlaying">
                <!-- Pause icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                    <rect y="20" width="20" height="5" rx="2.5" transform="rotate(-90 0 20)" fill="#D80A36" />
                    <rect x="10" y="20" width="20" height="5" rx="2.5" transform="rotate(-90 10 20)" fill="#D80A36" />
                </svg>
            </span>

            <span v-else>
                <!-- Play icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
                    <path
                        d="M20.25 9.49964C22.25 10.6543 22.25 13.5411 20.25 14.6958L4.49999 23.7891C2.49999 24.9438 -1.21966e-06 23.5004 -1.11872e-06 21.191L-3.23758e-07 3.00444C-2.22811e-07 0.695043 2.5 -0.748327 4.5 0.406374L20.25 9.49964Z"
                        fill="#D80A36" />
                </svg>
            </span>
        </button>

        <div class=" title-and-button">
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

.hero-video-toggle {
    position: absolute;
    width: 50px;
    height: 50px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background-color: var(--white-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    top: 0px;
    z-index: 10;
}

/* Viktigt för WCAG: tydlig focus-stil för tangentbordsanvändare */
/* .hero-video-toggle:focus-visible {
    outline: 2px solid black;
    outline-offset: 2px;
} */

@media (max-width: 1399px) {
    .title-and-button {
        left: 50%;
        margin-top: 80px;
        ;
    }

    .swirl-text {
        margin-top: -50px;
    }
}

@media (max-width: 1199px) {
    .title-and-button {
        left: 40%;
    }
}

@media (max-width: 991px) {
    .title-and-button {
        left: 50%;
        margin-top: 35px;
    }

    .swirl-text {
        margin-top: -60px;
    }

    h1 {
        font-size: 51px;
    }

}

@media (max-width: 767px) {


    .hero-movie {
        margin-top: 100px;

    }

    .title-and-button {
        left: 50%;
    }

    .swirl-text {
        margin-top: -0px;
    }

    .hero-video-toggle {

        top: 100px;
    }
}


@media (max-width: 575px) {

    .title-and-button {
        left: 0%;
        padding: 24px;
    }

    .swirl-text {
        margin-top: -80px;
        width: 200%
    }

    .hero-movie {
        width: 170%
    }

    .hero-video-toggle {
        top: 110px;
        right: 10px;
    }
}
</style>
