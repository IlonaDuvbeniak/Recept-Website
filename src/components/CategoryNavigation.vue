<script>
import Button from '@/components/Button.vue';
import { fetchData } from '@/API/FetchRecipesAndAddData';
import { fetchCategories } from '@/API/fetchCategories.js';
export default {
    name: "CategoryNavigation",
    components: {
        Button
    },
    data() {
        return { categories: [], recipes: [] };
    },
    methods: {
        async loadCategories() {
            this.categories = await fetchCategories();
            // console.log("Categories loaded in CategoryNavigation:", this.categories);
        },

        async loadRecipes() {
            this.recipes = await fetchData()
            // console.log("Recipes loaded in CategoryNavigation:", this.recipes);
        },
        numberOfRecipesInCategory(categoryName) {
            return this.recipes.filter(
                recipe => recipe.categories.includes(categoryName)
            ).length;
        },
        categorySlug(categoryName) {

            let categorySlug = categoryName.toLowerCase().replace(/&/g, 'and').replace(/ /g, '-').replace(/[^\w-]+/g, '')
            // console.log('slug for category', categoryName, '→', categorySlug);
            return categorySlug
        },
        isCurrentCategory(categoryName) {
            const slug = this.categorySlug(categoryName);
            return slug === this.$route.params.categorySlug;
        },
    },
    mounted() {
        this.loadCategories();
        this.loadRecipes();
    },

    computed: {
        totalNumberOfRecipes() {
            {
                return this.recipes.length;
            }
        },
        isShowingAllRecipes() {
            if (!this.$route.params.categorySlug) {
                // console.log(this.$route.params.categorySlug)
                return true;
            }
            return false;
        }
    }
}
</script>

<template>
    <div class="category-navigation">
        <Button :to="{ name: 'recepies' }" :btnText="`Alla (${totalNumberOfRecipes})`" variant="filter"
            :showArrow="false" :disabled="false" class="category-button" :pressed="isShowingAllRecipes"
            :aria-current="isShowingAllRecipes ? 'page' : null"></Button>
        <Button v-for="category in categories" :key="category.id"
            :to="`/recipes/category/${categorySlug(category.name)}`"
            :btnText="`${category.name} (${numberOfRecipesInCategory(category.name)})`" variant="filter"
            :showArrow="false" :pressed="isCurrentCategory(category.name)"
            :aria-current="isCurrentCategory(category.name) ? 'page' : null"></Button>
    </div>
</template>

<style scoped>
.category-navigation {
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 0 120px;
    flex-wrap: wrap;
    margin-bottom: 53px;
}

@media (max-width: 991px) {
    .category-navigation {
        padding: 0 72px;
    }
}

@media (max-width: 767px) {
    .category-navigation {
        padding: 0 52px;
    }
}

@media (max-width: 575px) {
    .category-navigation {
        padding: 0 24px;
    }
}
</style>
