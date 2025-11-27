<script>
import CardsGrid from '@/components/CardsGrid.vue';
import Button from '@/components/Button.vue'
import ArrowButton from '@/components/ArrowButton.vue';

export default {
    name: 'RecipesView',
    components: {
        CardsGrid,
        Button,
        ArrowButton
    }
}
</script>

<template>
    <ArrowButton/>
    <div class="container">
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
