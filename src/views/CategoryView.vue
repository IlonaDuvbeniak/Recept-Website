<script>
import CardsGrid from '@/components/CardsGrid.vue';
import CategoryNavigation from '@/components/CategoryNavigation.vue';

export default {
    name: "CategoryView",
    components: {
        CardsGrid,
        CategoryNavigation,
    }
}
</script>

<template>
    <div class="container">
        <CardsGrid :categorySlug="$route.params.categorySlug" />
        <CategoryNavigation></CategoryNavigation>
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
