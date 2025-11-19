<template>
    <section class="wrapper">
        <div class="rating-card">
            <div class="info-container">
                <div class="text-container">
                    <h3>Vad tyckte du om receptet?</h3>
                    <p>Klick på glasen för att ge ditt betyg!</p>
                </div>

                <RatingFunction/>
                <Button btnText="Skicka betyg" variant="primary" :showArrow="true" :disabled="false"/>
            </div>

            <div class="img-container">
                <img src="/img/rating-img.png" alt="Hand holding a drink" class="rating-image">
                <BackgroundLines/>
            </div>
        </div>
    </section>
</template>

<script>
    import RatingFunction from './RatingFunction.vue';
    import Button from '../Button.vue';
    import BackgroundLines from './BackgroundLines.vue';

    export default {
        components: {
            RatingFunction,
            Button,
            BackgroundLines
        }
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 132px 120px 52px 120px;
        height: 100%;
        position: relative;
    }

    .rating-card {
        display: flex;
        align-items: stretch;
        justify-content: center;
        width: 100%;
        background-color: var(--white-color);
        border-top: 1px solid var(--red-color);
        border-left: 1px solid var(--red-color);
        border-right: 3px solid var(--red-color);
        border-bottom: 3px solid var(--red-color);
    }

    .info-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 48px;
        padding: 100px 64px;
        width: 50%;
        border-right: 1px solid var(--red-color);
    }

    .text-container {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .rating-image {
        position: absolute;
        top: 0;
        right: 17%;
        width: 100%;
        max-width: 380px;
        height: auto;
    }

    .img-container {
        width: 50%;
    }

    h3 {
        color: var(--red-color);
        font-family: "Instrument Sans";
        font-size: 28px;
        font-weight: 700;
        line-height: 32px;
    }

    p {
        color: var(--red-color);
        font-family: "Instrument Sans";
        font-size: 20px;
        font-weight: 400;
        line-height: 24px; 
    }
</style>