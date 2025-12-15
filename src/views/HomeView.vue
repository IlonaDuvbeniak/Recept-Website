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
    }
  }

</script>

<template>
  <ArrowButton />
  <HeroSection />
  <div class="container">
    <CardsGrid :limit="6"/>
    <div class="btn-container">
      <Button :to="{ name: 'recepies' }" btnText="Visa fler" variant="primary" :showArrow="true" :disabled="false"></Button>
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
