<script>
import { fetchData } from '@/FetchData.vue';
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
        categorySlug: String,
        limit: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            coctails: [],
            searchTerm: "",
            categoryTitle: ""
        }
    },
    async created() {
        this.coctails = await fetchData();
    },

    watch: {
        categorySlug: {
            handler(title) {
                if (title) {
                    const newTitle = title
                        .replace(/-/g, ' ')
                        .split(' ')
                        .map(word => word[0].toUpperCase() + word.slice(1))
                        .join(' ')
                    this.categoryTitle = newTitle
                    document.title = `${this.categoryTitle} - Drinks`
                } else {
                    document.title = "Alla Recept - Drinks"
                }
            },
            immediate: true  
        },
        filteredCoctails: {
            handler(val) {
                this.$emit('update:total', val.length);
            },
            immediate: true
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
        },
        limitedCoctails() {
            if (!this.limit) return this.filteredCoctails;
            return this.filteredCoctails.slice(0, this.limit);
        }
    }
}
</script>


<template>
    <div class="page-container">
        <SearchBar :value="searchTerm" @input="searchTerm = $event" />
        <CategoryNavigation></CategoryNavigation>
        <div class="cards-container">
            <Card v-for="coctail in limitedCoctails" :key="coctail.id" :categori="coctail.categories[1]"
                :categorySlug="coctail.slug" :name="coctail.title" :rating="coctail.ratings[1]"
                :ingridients="coctail.ingredients" :time="coctail.timeInMins" :image="coctail.imageUrl" :label="coctail.title"
                :to="{ name: 'recipe', params: { slug: coctail.slug } }"
            />
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
