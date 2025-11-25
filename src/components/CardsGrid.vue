<script>
import { getData } from '../FetchData.vue'
import Card from '../components/Card.vue'
import SearchBar from '@/components/SearchBar.vue';

export default {
    components: {
        Card,
        SearchBar,
    },
    props: {
        categorySlug: String
    },
    data() {
        return {
            coctails: [],
            searchTerm: ""
        }
    },
    async mounted() {
        try {
            const data = await getData()
            this.coctails = data.coctails
        } catch (err) {
            console.log(err)
        }
    },
    computed: {
        filteredCoctails() {
            if (!this.categorySlug) {
                // Om ingen kategori skickas (t.ex. på HomeView/RecipesView) → visa alla
                return this.coctails
            }
            return this.coctails.filter(
                (coctail) => coctail.categorySlug === this.categorySlug
            )
        }
    }
}
</script>

<template>
    <div class="page-container">
        <SearchBar :value="searchTerm" @input="searchTerm = $event" />
        <p>{{ searchTerm }}</p>

        <div class="cards-container">
            <Card v-for="coctail in filteredCoctails" :key="coctail.id" :categori="coctail.categori"
                :categorySlug="coctail.categorySlug" :name="coctail.name" :rating="coctail.rating"
                :ingridients="coctail.ingridients" :time="coctail.time" :image="coctail.image" :label="coctail.name"
                :to="{ name: 'recipe', params: { slug: coctail.slug } }" />
        </div>
    </div>
</template>

<style scoped>
.cards-container {
    display: grid;
    grid-template-columns: auto auto auto;
    width: 100%;
    gap: 24px;
    padding: 0 120px;
}
</style>
