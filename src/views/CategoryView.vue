<script>
import CardsGrid from '@/components/CardsGrid.vue';
import ArrowButton from '@/components/ArrowButton.vue';

export default {
    name: "CategoryView",
    components: {
        CardsGrid,
        ArrowButton
    },
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}
</script>

<template>
    <ArrowButton variant="to-top" @click="scrollToTop"/>
    <div class="container">
        <CardsGrid :categorySlug="$route.params.categorySlug" />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 52px;
}
</style>
