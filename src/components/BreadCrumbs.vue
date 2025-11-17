<script>
import data from '/recipesData.json';

export default {
    name: 'BreadCrumbs',
    computed: {
        IsShowingRecipesView() {
            return this.$route.path.includes('recipes')
        },
        IsShowingRecipeView() {
            return this.$route.path.includes('recipes/')
        },
        BreadCrumbRecipeName() {
            if (!this.IsShowingRecipeView) return ''

            const slug = this.$route.params.slug
            const recipe = data.coctails.find(drink => drink.slug === slug)
            return recipe ? recipe.name : ''
        }
    }
}
</script>
<template>
    <nav class="bread-crumbs"
     v-if="IsShowingRecipesView || IsShowingRecipeView">
        <ul>
            <li >
                <router-link to="/">Home</router-link>
            </li>
            <li v-if="IsShowingRecipesView">
                <span>
                    <img src="/img/arrow-bread-crumbs.svg" alt="arrow icon" />
                </span>
               <router-link to="/recipes">Recipes</router-link>
            </li>
            <li v-if="IsShowingRecipeView">
                <span>
                    <img src="/img/arrow-bread-crumbs.svg" alt="arrow icon" />
                </span>
                <span>{{ BreadCrumbRecipeName }}</span>
            </li>

        </ul>
    </nav>
</template>
<style scoped>
    .bread-crumbs {
        font-family: "Instrument Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        text-decoration: none;
        margin: 54px 0;
    }

    .bread-crumbs ul {
        list-style: none;
        display: flex;
        justify-content: center
    }

    .bread-crumbs li {
        margin-right: 8px;
    }

    .bread-crumbs a {
        text-decoration: none;
        color: var(--red-color);
    }

    .bread-crumbs span {
        margin-right: 8px;
        color: var(--red-color);
    }
</style>
