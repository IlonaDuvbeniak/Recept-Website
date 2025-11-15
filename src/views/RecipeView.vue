<script>
import data from '/recipesData.json';
import BreadCrumbs from '@/components/BreadCrumbs.vue'

export default {
    name: 'recipe',
    components: { BreadCrumbs },
    data() {
        return {
            recipe: null
        }
    },
    created() {
    const id = Number(this.$route.params.id)
    this.recipe = data.coctails.find(drink => drink.id === id)
  },

}
</script>

<template>
</template>

<style>
</style>
