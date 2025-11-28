<script>
import CardsGrid from '@/components/CardsGrid.vue';
import Button from '@/components/Button.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'RecipesView',
    components: {
        CardsGrid,
        Button,
        Footer
    }
}
</script>

<template>
    <div class="container">
        <CardsGrid />
        <Button btnText="Visa fler" variant="primary" :showArrow="true" :disabled="false" @event="showMore"></Button>
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
