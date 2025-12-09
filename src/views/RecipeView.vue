<script>
import { fetchData } from '@/FetchData.vue';
import ReceptCard from '@/components/RecipeComponents/ReceptCard.vue';
import HowToDo from '@/components/RecipeComponents/HowToDo.vue';
import RatingCard from '@/components/RecipeComponents/RatingCard.vue';
import CommentForm from '../components/CommentForm.vue';
import ArrowButton from '@/components/ArrowButton.vue';
import Footer from '@/components/Footer.vue';
import Loading from '@/components/Loading.vue';
import NotFound from '@/components/NotFound.vue';



export default {
  name: 'recipe',

  components: {
    ReceptCard,
    HowToDo,
    RatingCard,
    CommentForm,
    ArrowButton,
    Footer,
    Loading,
    NotFound
  },

  props: ['slug'],

  data() {
    return {
      recipe: null,
      coctails: [],
      loading: false
    }
  },

  async created() {
    this.loading = true;

    try {
      this.coctails = await fetchData();
      this.updateRecipeSlug();

    } finally {
      this.loading = false;
    }

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
        document.title = `${this.recipe.title} - Drinks`;

        if (Array.isArray(this.recipe.ratings) && this.recipe.ratings.length > 0) {
          const values = this.recipe.ratings.filter(n => typeof n === "number");
          const avg = values.reduce((a, b) => a + b, 0) / values.length;
          this.recipe.rating = Math.round(avg * 10) / 10;
        } else {
          this.recipe.rating = 0;
        }
      }
    },

    updateRating(newAverage) {
      if (!this.recipe) return;

      if (isNaN(newAverage) || newAverage == null) {
        console.warn("Invalid average rating detected:", newAverage);
        this.recipe.rating = 0;
        return;
      }

      this.recipe.rating = Math.round(newAverage * 10) / 10;
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};

</script>

<template>
  <ArrowButton variant="to-top" @click="scrollToTop" />

  <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="129" viewBox="0 0 1440 129" fill="none"
    class="element-header">
    <path
      d="M-55.5 -45.5L34.3619 23.9578C168.915 127.959 359.645 120.918 487.534 8.82223C619.611 -106.946 818.329 -108.632 950.909 6.56029C1081.18 119.743 1274.36 121.544 1406.71 10.81L1529 -91.5"
      stroke="#A5D1D0" stroke-width="62" />
  </svg>

  <div v-if="loading">
    <Loading />
  </div>

  <div v-else-if="recipe">
    <ReceptCard :name="recipe.title" :categori="recipe.categories?.[0] || 'Uncategorized'"
      :categorySlug="recipe.categorySlug" :description="recipe.description" :rating="recipe.rating"
      :ingridients="recipe.ingredients.length" :time="recipe.timeInMins" :image="recipe.imageUrl" />

    <HowToDo :items="recipe.ingredients" :steps="recipe.instructions" />

    <RatingCard :recipeId="String(recipe.id || '')" @rating-updated="updateRating" />

    <CommentForm />

    <Footer />
  </div>

  <div v-else>
    <NotFound />
    <Footer />
  </div>

  <!-- test av Nat -->
  <!-- <CommentFormTryAndError message="Hej från parent! ${this.recipe}" :count="5" />    -->
  <!-- slut test av Nat -->

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
