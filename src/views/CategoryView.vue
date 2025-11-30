<script>
import CardsGrid from '@/components/CardsGrid.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: "CategoryView",
    components: {
        CardsGrid,
        Footer
    }
}
</script>

<template>
    <div class="container">
        <CardsGrid :categorySlug="$route.params.categorySlug" />
    </div>
    <Footer />
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
