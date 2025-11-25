<script>
import HeroSection from '../components/HeroSection.vue';
import CardsGrid from '@/components/CardsGrid.vue';
import Button from '@/components/Button.vue'
import CategoryNavigation from '@/components/CategoryNavigation.vue';
export default {
  name: 'HomeView',
  components: {
    HeroSection,
    CardsGrid,
    Button,
    CategoryNavigation
  },
}
</script>
<template>
  <HeroSection />
  <div class="container">
    <CategoryNavigation></CategoryNavigation>
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
