<template>
    <section class="wrapper">
        <div class="recept-card">
            <div class="info-container">
                <div class="text-wrapper">
                    <router-link :to="{ name: 'category', params: { categorySlug: categorySlug } }" class="categori">
                        {{ categori }}
                    </router-link>
                    <h1 class="recept-name">{{ name }}</h1>
                    <p class="description">{{ description }}</p>
                </div>

                <div class="info-recipe-card">
                    <InfoBlockCard icon="/img/star-rating.svg" :value="rating" label="Rating" />
                    <InfoBlockCard icon="/img/grocery.svg" :value="ingridients" label="Ingridients" />
                    <InfoBlockCard icon="/img/timer.svg" :value="time" label="Minutes" />
                </div>
            </div>
            <div class="img-container">
                <img :src="image" :alt="name">  
            </div>
        </div>
    </section>
</template>

<script>
import InfoBlockCard from '../InfoBlockCard.vue';

export default {
    components: {
        InfoBlockCard
    },

    props: {
        icon: String,
        value: [String, Number],
        label: String,
        rating: Number,
        ingridients: Number,
        time: Number,
        categori: String,
        name: String,
        categorySlug: String,
        description: String,
        image: String,
        to: [String, Object]
    }
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 120px 52px 120px;
    }

    .recept-card {
        display: flex;
        border-top: 1px solid var(--red-color);
        border-left: 1px solid var(--red-color);
        border-right: 3px solid var(--red-color);
        border-bottom: 3px solid var(--red-color);
        overflow: hidden;
        width: 100%;
    }

    .info-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 0;                
        border-right: 1px solid var(--red-color);
        width: 50%;
    }

    .text-wrapper {
        padding: 52px;
    }

    .categori {
        font-family: "Instrument Sans";
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        color: var(--red-color);
        text-decoration: none;
    }

    .recept-name {
        font-family: Kalnia;
        font-size: 56px;
        font-weight: 700;
        line-height: 64px;
        color: var(--red-color);
        margin-top: 12px;
        margin-bottom: 32px;
    }

    .description {
        font-family: "Instrument Sans";
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 1.28px;
        color: var(--red-color);
    }

    .info-recipe-card {
        display: flex;
        border-top: 1px solid var(--red-color);
    }

    .img-container {
        width: 50%;
        padding: 24px;
        overflow: hidden;
        place-items: center;
    }

    .img-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;    
        object-position: center;
    }

</style>
