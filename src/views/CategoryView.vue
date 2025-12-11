<script>
import CardsGrid from '@/components/CardsGrid.vue';
import ArrowButton from '@/components/ArrowButton.vue';
import Footer from '@/components/Footer.vue';
import Button from '@/components/Button.vue';

export default {
    name: "CategoryView",
    components: {
        CardsGrid,
        ArrowButton,
        Footer,
        Button
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
        <CardsGrid :categorySlug="$route.params.categorySlug" :limit="visibleCount" @update:total="total = $event" />
        <Button v-if="visibleCount < total" btnText="Visa fler" variant="primary" :showArrow="true" :disabled="false"
            @event="showMore"></Button>
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
