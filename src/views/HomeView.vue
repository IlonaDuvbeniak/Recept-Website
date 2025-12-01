<script>
  import HeroSection from '../components/HeroSection.vue';
  import CardsGrid from '@/components/CardsGrid.vue';
  import Button from '@/components/Button.vue'
  import ArrowButton from '@/components/ArrowButton.vue';

  export default {
    name: 'HomeView',
    components: {
      HeroSection,
      CardsGrid,
      Button,
      ArrowButton
    },
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
  }
</script>

<template>
  <ArrowButton variant="to-top" @click="scrollToTop"/>
  <HeroSection />
  <div class="container">
    <CardsGrid />
    <Button :to="{ name: 'recepies' }" btnText="Visa fler" variant="primary" :showArrow="true"
      :disabled="false"></Button>
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
