<script>
import data from '/recipesData.json';

export default {
    name: 'recipe',
    data() {
        return {
            recipe: null
        }
    },
    created() {
    const slug = this.$route.params.slug
    this.recipe = data.coctails.find(drink => drink.slug === slug)
  },

}
</script>

<template>
    <div v-if="recipe">
  <!-- visa receptet -->
</div>
<div v-else>
  <h2>Receptet hittades inte</h2>
</div>
</template>

<style scoped>
h2 {
    text-align: center;
    margin-top: 50px;
    color: var(--red-color);
    font-family: "Instrument Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
}
</style>
