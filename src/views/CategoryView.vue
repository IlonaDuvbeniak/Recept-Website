<script>
import CardsGrid from '@/components/CardsGrid.vue';
import ArrowButton from '@/components/ArrowButton.vue';

export default {
    name: "CategoryView",
    components: {
        CardsGrid,
        ArrowButton
    }
}
</script>

<template>
    <ArrowButton/>
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
