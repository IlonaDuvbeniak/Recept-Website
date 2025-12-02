<template>
    <section class="wrapper">
        <div class="recept-card">
            <div class="info-container">
                <div class="text-wrapper">
                    <!-- <router-link :to="{ name: 'category', params: { categorySlug: categorySlug } }" class="categori">
                        {{ categori }}
                    </router-link> -->
                    <h1 class="recept-name">{{ name }}</h1>
                    <p class="description">{{ description }}</p>
                </div>

                <div class="info-recipe-card">
                    <InfoBlockCard icon="/img/star-rating.svg" :value="rating" label="Poäng" />
                    <InfoBlockCard icon="/img/grocery.svg" :value="ingridients" label="Ingredienser" />
                    <InfoBlockCard icon="/img/timer.svg" :value="time" label="Minuter" />
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
        // categori: String,
        name: String,
        // categorySlug: String,
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

    .categori:hover {
        text-decoration: underline;
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

    @media (max-width: 991px) {
        .wrapper {
            padding: 0 72px 52px 72px;
        }

        .recept-card {
            flex-direction: column;
        }

        .img-container, .info-container {
            width: 100%;
            height: 50%;
        }

        .info-container {
            order: 2;
            border-right: none;
        }
     
        .text-wrapper {
            padding: 44px;
        }

        .img-container {
            order: 1;
            border-bottom: 1px solid var(--red-color);
        }
    }

    @media (max-width: 767px) {
        .wrapper {
            padding: 0 52px 52px 52px;
        }

        .img-container {
            padding: 20px;
        }

        .text-wrapper {
            padding: 20px;
        }

        .recept-name {
            font-size: 48px;
            line-height: 56px;
            margin-top: 12px;
            margin-bottom: 24px;
        }
    }

    @media (max-width: 575px) {
        .wrapper {
            padding: 0 24px 24px 24px;
        }

        .img-container {
            padding: 16px;
        }

        .text-wrapper {
            padding: 16px;
        }

        .recept-name {
            font-size: 40px;
            line-height: 48px;
            margin-top: 8px;
            margin-bottom: 20px;
        }

        .description {
            font-size: 14px;
            line-height: 20px;
        }
    }

</style>
