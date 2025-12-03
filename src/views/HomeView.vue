<script>
  import HeroSection from '../components/HeroSection.vue';
  import CardsGrid from '@/components/CardsGrid.vue';
  import Button from '@/components/Button.vue'
  import ArrowButton from '@/components/ArrowButton.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    name: 'HomeView',
    components: {
      HeroSection,
      CardsGrid,
      Button,
      ArrowButton,
      Footer
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
    <CardsGrid :limit="6"/>
    <Button :to="{ name: 'recepies' }" btnText="Visa fler" variant="primary" :showArrow="true"
      :disabled="false"></Button>
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
