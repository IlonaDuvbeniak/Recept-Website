<script>

  import { getData } from '../FetchData.vue'
  import ReceptCard from '@/components/RecipeComponents/ReceptCard.vue';
  import HowToDo from '@/components/RecipeComponents/HowToDo.vue';
  import RatingCard from '@/components/RecipeComponents/RatingCard.vue';
  import CommentForm from '../components/CommentForm.vue';
  
  
  export default {
      name: 'recipe',

      components: {
        ReceptCard,
        HowToDo,
        RatingCard,
        CommentForm
      },

      props: ['slug'],

      data() {
          return {
              recipe: null,
              coctails: []
          }
      },

      async created() {
        try {
          const data = await getData()
          this.coctails = data.coctails

          this.recipe = this.coctails.find(c => c.slug === this.slug)
        } catch (err) {
          console.error(err)
        }
      }
  }

</script>

<template>

    <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="129" viewBox="0 0 1440 129" fill="none" class="element-header">
      <path d="M-55.5 -45.5L34.3619 23.9578C168.915 127.959 359.645 120.918 487.534 8.82223C619.611 -106.946 818.329 -108.632 950.909 6.56029C1081.18 119.743 1274.36 121.544 1406.71 10.81L1529 -91.5" stroke="#A5D1D0" stroke-width="62"/>
    </svg>

    <div v-if="recipe">
        <ReceptCard
            :categori="recipe.categori"
            :name="recipe.name"
            :description="recipe.description"
            :rating="recipe.rating"
            :ingridients="recipe.ingridients"
            :time="recipe.time"
            :image="recipe.image"
        />

        <HowToDo :items="recipe.ingridientslist" :steps="recipe.recept"/>
        <RatingCard/>
    </div>

    <div v-else>
      <h2>Receptet hittades inte</h2>
    </div>
  
    <section>
        <CommentForm />
    </section>
  
</template>
  

<style scoped>
  .element-header{
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: -1;
  }

</style>
