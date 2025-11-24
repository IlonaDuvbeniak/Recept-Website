<script>
import CardsGrid from '@/components/CardsGrid.vue';
import Button from '@/components/Button.vue'
import SearchBar from '@/components/SearchBar.vue';

export default {
    name: 'RecipesView',
    components: {
        CardsGrid,
        Button,
        SearchBar
    }
}
</script>

<template>
    <div class="container">
        <SearchBar></SearchBar>
        <CardsGrid />
        <Button btnText="Visa fler" variant="primary" :showArrow="true" :disabled="false" @event="showMore"></Button>
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
