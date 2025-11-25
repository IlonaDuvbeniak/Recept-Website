<script>
import CardsGrid from '@/components/CardsGrid.vue';

export default {
    name: "CategoryView",
    components: {
        CardsGrid,
    }
}
</script>

<template>
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
