<script>
import { getData } from '../FetchData.vue'
import Card from '../components/Card.vue'
import SearchBar from '@/components/SearchBar.vue';
import CategoryNavigation from './CategoryNavigation.vue';

export default {
    components: {
        Card,
        SearchBar,
        CategoryNavigation
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
            let result = this.coctails

            if (this.categorySlug) {
                result = result.filter(
                    (coctail) => coctail.categorySlug === this.categorySlug
                )
            }

            if (this.searchTerm) {
                const term = this.searchTerm.toLowerCase()
                result = result.filter((coctail) =>
                    coctail.name.toLowerCase().includes(term)
                )
            }
            return result
        }
    }
}
</script>

<template>
    <div class="page-container">
        <SearchBar :value="searchTerm" @input="searchTerm = $event" />
        <CategoryNavigation></CategoryNavigation>
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
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        gap: 24px;
        padding: 0 120px;
    }

    @media (max-width: 991px) {
        .cards-container {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 72px;
        }
    }

    @media (max-width: 767px) {
        .cards-container {
            gap: 20px;
            padding: 0 52px;
        }
    }

    @media (max-width: 575px) {
        .cards-container {
            grid-template-columns: 1fr;
            padding: 0 24px;
        }
    }
</style>
