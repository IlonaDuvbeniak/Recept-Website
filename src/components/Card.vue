<script>
import ButtonCard from './ButtonCard.vue'
import InfoBlockCard from './InfoBlockCard.vue';

export default {
    components: {
        ButtonCard,
        InfoBlockCard
    },
    props: {
        categori: String,
        categorySlug: String,
        name: String,
        rating: Number,
        ingridients: Number,
        time: Number,
        image: String,
        label: String,
        to: [String, Object]
    }
}
</script>

<template>
    <div class="card">
        <div class="image-container">
            <img :src="image" :alt="label">
        </div>

        <div class="name-container">
            <div class="text-name-container">
                <router-link :to="{ name: 'category', params: { categorySlug: categorySlug } }">
                    {{ categori }}
                </router-link>
                <h2>{{ name }}</h2>
            </div>
            <ButtonCard :to="to" />
        </div>

        <div class="info-recipe-card">
            <InfoBlockCard icon="/img/star-rating.svg" :value="rating" label="Rating" />
            <InfoBlockCard icon="/img/grocery.svg" :value="ingridients" label="Ingridients" />
            <InfoBlockCard icon="/img/timer.svg" :value="time" label="Minutes" />
        </div>

    </div>
</template>


<style scoped>
.card {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-color: var(--red-color);
    border-width: 1px 3px 3px 1px;
}

.image-container {
    width: 100%;
    padding: 16px;
}

.image-container img {
    width: 100%;
    height: auto;
    object-fit: cover; 
}


.name-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    border-top: 1px solid var(--red-color);
    border-bottom: 1px solid var(--red-color);
}

.text-name-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
    width: 66.666%;
    padding: 16px 0px 16px 16px;
}


a {
    color: var(--red-color);
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    text-decoration: none;
}

h2 {
    color: var(--red-color);
    font-family: "Instrument Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
}

.info-recipe-card {
    display: flex;
    align-items: center;
}
</style>
