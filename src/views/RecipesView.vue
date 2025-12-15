<script>
import CardsGrid from '@/components/CardsGrid.vue';
import Button from '@/components/Button.vue'
import ArrowButton from '@/components/ArrowButton.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'RecipesView',
    components: {
        CardsGrid,
        Button,
        ArrowButton,
        Footer
    },
    methods: {
        showMore() {
            this.visibleCount += 9;
        }
    },
    data() {
        return {
            visibleCount: 9,
            total: 0
        }
    }
}
</script>

<template>
    <ArrowButton />
    <div class="container">
        <CardsGrid :limit="visibleCount" @update:total="total = $event"/>
        <div class="btn-container">
            <Button v-if="visibleCount < total" btnText="Visa fler" variant="primary" :showArrow="true" :disabled="false" @event="showMore"></Button>
        </div>
       
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

    @media (max-width: 575px) {
        .btn-container {
            width: 100%;
            padding: 0px 24px;
        }
    }
</style>
