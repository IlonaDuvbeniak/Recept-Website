<script>
import HeroSection from '../components/HeroSection.vue';
import CardsGrid from '@/components/CardsGrid.vue';
import Button from '@/components/Button.vue';
import Footer from '@/components/Footer.vue';


export default {
  name: 'HomeView',
  components: {
    HeroSection,
    CardsGrid,
    Button,
    Footer
  },
}
</script>
<template>
  <HeroSection />
  <div class="container">
    <CardsGrid />
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
