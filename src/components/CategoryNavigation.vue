<script>
import Button from '@/components/Button.vue';
import { fetchData } from '@/FetchData.vue';
export default {
    name: "CategoryNavigation",
    components: {
        Button
    },
    data() {
        return { categories: [], recipes: [] };
    },
    methods: {
        async fetchCategories() {
            try {
                console.log("Gets categories from API");
                const response = await fetch('https://recipes.bocs.se/api/v1/d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a/categories');
                const data = await response.json();
                // console.log(data)
                // console.log(typeof data)
                // console.log(Array.isArray(data))
                // console.log(data[0]);

                this.categories = data;
            } catch (error) {
                console.error('Error fetching categories:', error);
            }

        },
        async loadRecipes() {
            this.recipes = await fetchData()
            console.log("Recipes loaded in CategoryNavigation:", this.recipes);
        },
        numberOfRecipesInCategory(categoryName) {
            return this.recipes.filter(
                recipe => recipe.categories.includes(categoryName)
            ).length;
        },
        categorySlug(categoryName) {

            let categorySlug = categoryName.toLowerCase().replace(/&/g, 'and').replace(/ /g, '-').replace(/[^\w-]+/g, '')
            console.log('slug for category', categoryName, '→', categorySlug);
            return categorySlug
        },
        isCurrentCategory(categoryName) {
            const slug = this.categorySlug(categoryName);
            return slug === this.$route.params.categorySlug;
        },
    },
    mounted() {
        this.fetchCategories();
        this.loadRecipes();
    },

    computed: {
        allRecipes() {
            {
                return this.recipes;
            }
        },
        isShowingAllRecipes() {
            if (!this.$route.params.categorySlug) {
                console.log(this.$route.params.categorySlug)
                return true;
            }
            return false;
        }
    }
}
</script>

<template>
    <div class="category-navigation">
        <Button :to="{ name: 'recepies' }" :btnText="`Alla (${allRecipes.length})`" variant="filter" :showArrow="false"
            :disabled="false" class="category-button" :pressed="isShowingAllRecipes"
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
