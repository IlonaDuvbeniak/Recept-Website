<script>
import { fetchData } from '@/FetchData.vue';
import ReceptCard from '@/components/RecipeComponents/ReceptCard.vue';
import HowToDo from '@/components/RecipeComponents/HowToDo.vue';
import RatingCard from '@/components/RecipeComponents/RatingCard.vue';
import CommentForm from '../components/CommentForm.vue';
import CommentFormTryAndError from '../components/CommentFormTryAndError.vue';
import ArrowButton from '@/components/ArrowButton.vue';
import Footer from '@/components/Footer.vue';



export default {
  name: 'recipe',

  components: {
    ReceptCard,
    HowToDo,
    RatingCard,
    CommentForm,
    CommentFormTryAndError,
    ArrowButton,
    Footer
  },

  props: ['slug'],

  data() {
    return {
      recipe: null,
      coctails: []
    }
  },

  async created() {
      this.coctails = await fetchData();
      this.updateRecipeSlug();
  },


  watch: {
    slug: {
        immediate: true,
        handler() {
          this.updateRecipeSlug()
        }
      }
  },

  methods: {
    updateRecipeSlug() {
      this.recipe = this.coctails.find(c => c.slug === this.slug)
      if (this.recipe) {
        document.title = `${this.recipe.title} - Drinks`
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

</script>

<template>

  <ArrowButton variant="to-top" @click="scrollToTop"/>

  <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="129" viewBox="0 0 1440 129" fill="none"
    class="element-header">
    <path
      d="M-55.5 -45.5L34.3619 23.9578C168.915 127.959 359.645 120.918 487.534 8.82223C619.611 -106.946 818.329 -108.632 950.909 6.56029C1081.18 119.743 1274.36 121.544 1406.71 10.81L1529 -91.5"
      stroke="#A5D1D0" stroke-width="62" />
  </svg>

  <div v-if="recipe">
    <ReceptCard  
      :name="recipe.title"
      :categori="recipe.categories[0]"
      :categorySlug="recipe.categorySlug"
      :description="recipe.description" 
      :rating="recipe.ratings" 
      :ingridients="recipe.ingredients" 
      :time="recipe.timeInMins"
      :image="recipe.imageUrl" 
    />

    <HowToDo :items="recipe.ingredients" :steps="recipe.instructions" />
    <RatingCard />
    <CommentForm />
    <CommentFormTryAndError />
    <Footer />
  </div>

  <div v-else>
    <h2>Receptet hittades inte</h2>
  </div>

</template>


<style scoped>
  .element-header {
    position: absolute;
    top: 0;
    left: 50%;                    
    transform: translateX(-50%);                  
    z-index: -1;
    overflow: visible;           
    pointer-events: none;
  }

  @media (max-width: 575px) {
      .element-header {
          display: none;
      }
  }
</style>
