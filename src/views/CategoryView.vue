<script>
import CardsGrid from '@/components/CardsGrid.vue';
import ArrowButton from '@/components/ArrowButton.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: "CategoryView",
    components: {
        CardsGrid,
        ArrowButton,
        Footer
    },
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        showMore() {
            this.visibleCount += 6;
        }   
    },
    data() {
        return {
            visibleCount: 6,
            total: 0
        }
    }
}
</script>

<template>
    <ArrowButton variant="to-top" @click="scrollToTop"/>
    <div class="container">
        <CardsGrid :categorySlug="$route.params.categorySlug" :limit="visibleCount" @update:total="total = $event" />
        <Button v-if="visibleCount < total" btnText="Visa fler" variant="primary" :showArrow="true" :disabled="false" @event="showMore"></Button>
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
