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
                console.log(data)
                console.log(typeof data)
                console.log(Array.isArray(data))
                console.log(data[0]);

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
        }
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
        }
    }
}
</script>

<template>
    <div class="category-navigation">
        <Button :to="{ name: 'recepies' }" :btnText="`Alla (${allRecipes.length})`" variant="filter" :showArrow="false"
            :disabled="false" class="category-button"></Button>
        <Button v-for="category in categories" :key="category.id" :to="`/recipes/category/${category.slug}`"
            :btnText="`${category.name} (${numberOfRecipesInCategory(category.name)})`" variant="filter"
            :showArrow="false"></Button>


        <!-- <Button :to="{ name: 'recepies' }" btnText="Alla" variant="filter" :showArrow="false" :disabled="false"
            class="category-button"></Button>
        <Button to="/recipes/category/drunk-in-paradise" btnText="Drunk in paradise" variant="filter" :showArrow="false"
            :disabled="false" class="category-button"></Button>
        <Button to="/recipes/category/party-like-its-friday" btnText="Party Like It’s Friday" variant="filter"
            :showArrow="false"></Button>
        <Button to="/recipes/category/post-breakup-potions" btnText="Post-Breakup Potions" variant="filter"
            :showArrow="false"></Button>
        <Button to="/recipes/category/boos-and-brews" btnText="Boos & Brews" variant="filter"
            :showArrow="false"></Button>
        <Button to="/recipes/category/sips-of-christmas" btnText="Sips of Christmas" variant="filter"
            :showArrow="false"></Button> -->
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
