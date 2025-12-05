<script>
import data from '/recipesData.json';

export default {
    name: 'BreadCrumbs',
    computed: {
        IsShowingRecipesView() {
            return this.$route.path.includes('recipes')
        },
        IsShowingCategoryView() {
            return this.$route.path.includes('recipes/category/')
        },
        IsShowingRecipeView() {
            const parts = this.$route.path.split('/')
            return parts[1] === 'recipes' && parts[2] !== 'category'
        },
        BreadCrumbRecipeName() {
            if (!this.IsShowingRecipeView) return ''

            const slug = this.$route.params.slug
            const recipe = data.coctails.find(drink => drink.slug === slug)
            return recipe ? recipe.name : ''
        },
        BreadCrumbCategoryName() {
            if (!this.IsShowingCategoryView) return ''

            const categorySlug = this.$route.params.categorySlug
            const category = data.coctails.find(drink => drink.categorySlug === categorySlug)
            return category ? category.categori : ''
        },
        IsOnRecipesRoot() {
            return this.$route.name === 'recepies';
        }
    }
}
</script>
<template>
    <nav class="bread-crumbs" v-if="IsShowingRecipesView || IsShowingRecipeView" aria-label="Breadcrumb">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li v-if="IsShowingRecipesView">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                        <path
                            d="M6.7071 6.70597C7.09763 6.3155 7.09763 5.68137 6.7071 5.2909L1.70821 0.292854C1.31768 -0.0976181 0.683441 -0.0976181 0.292903 0.292854C-0.0976348 0.683327 -0.0976348 1.31745 0.292903 1.70793L3.58592 5.00039L4.62565 5.99985L3.58592 6.99961L0.292903 10.2921C-0.0976348 10.6825 -0.0976348 11.3167 0.292903 11.7071C0.683441 12.0976 1.31768 12.0976 1.70821 11.7071L6.7071 6.7091V6.70597Z"
                            fill="#A5D1D0" />
                    </svg>
                </span>
                <router-link to="/recipes" :aria-current="IsOnRecipesRoot ? 'page' : null">Recipes</router-link>
            </li>
            <li v-if="IsShowingCategoryView">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                        <path
                            d="M6.7071 6.70597C7.09763 6.3155 7.09763 5.68137 6.7071 5.2909L1.70821 0.292854C1.31768 -0.0976181 0.683441 -0.0976181 0.292903 0.292854C-0.0976348 0.683327 -0.0976348 1.31745 0.292903 1.70793L3.58592 5.00039L4.62565 5.99985L3.58592 6.99961L0.292903 10.2921C-0.0976348 10.6825 -0.0976348 11.3167 0.292903 11.7071C0.683441 12.0976 1.31768 12.0976 1.70821 11.7071L6.7071 6.7091V6.70597Z"
                            fill="#A5D1D0" />
                    </svg>
                </span>
                <span aria-current="page">{{ BreadCrumbCategoryName }}</span>
            </li>
            <li v-if="IsShowingRecipeView">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                        <path
                            d="M6.7071 6.70597C7.09763 6.3155 7.09763 5.68137 6.7071 5.2909L1.70821 0.292854C1.31768 -0.0976181 0.683441 -0.0976181 0.292903 0.292854C-0.0976348 0.683327 -0.0976348 1.31745 0.292903 1.70793L3.58592 5.00039L4.62565 5.99985L3.58592 6.99961L0.292903 10.2921C-0.0976348 10.6825 -0.0976348 11.3167 0.292903 11.7071C0.683441 12.0976 1.31768 12.0976 1.70821 11.7071L6.7071 6.7091V6.70597Z"
                            fill="#A5D1D0" />
                    </svg>
                </span>
                <span aria-current="page">{{ BreadCrumbRecipeName }}</span>
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
    margin: 24px 0 52px 0;
}

.bread-crumbs ul {
    list-style: none;
    display: flex;
    justify-content: center
}

.bread-crumbs li:not(:last-child) {
    margin-right: 16px;
}

.bread-crumbs a {
    text-decoration: none;
    color: var(--red-color);
}

.bread-crumbs span {
    margin-right: 16px;
    color: var(--red-color);
}
</style>
