<script>
import { fetchData } from '@/API/FetchRecipesAndAddData';
import Card from '../components/Card.vue'
import SearchBar from '@/components/SearchBar.vue';
import CategoryNavigation from './CategoryNavigation.vue';
import Loading from '@/components/Loading.vue';

export default {
    components: {
        Card,
        SearchBar,
        CategoryNavigation,
        Loading
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
            categoryTitle: "",
            loading: false
        }
    },

    async created() {
        this.loading = true;

        try {
            this.coctails = await fetchData();
        } finally {
            this.loading = false;
        }  
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
                    this.categoryTitle = ""
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
                    coctail.title.toLowerCase().includes(term)
                )
            }
            return result
        },
        limitedCoctails() {
            if (!this.limit) return this.filteredCoctails;
            return this.filteredCoctails.slice(0, this.limit);
        },

      
        coctailsWithAverage() {
            return this.limitedCoctails.map(c => {
                const list = Array.isArray(c.ratings) ? c.ratings : [];
                const avg = list.length
                    ? list.reduce((a, b) => a + b, 0) / list.length
                    : 0;

                return {
                    ...c,
                    averageRating: Math.round(avg * 10) / 10
                };
            });
         }
    }
}

</script>


<template>
    <div class="page-container">
        <SearchBar :value="searchTerm" @input="searchTerm = $event" />
        <CategoryNavigation></CategoryNavigation>
        <div v-if="loading">
            <Loading />
        </div>
        <div v-else class="cards-container">
            <Card 
                v-for="coctail in coctailsWithAverage"
                :key="coctail.id"
                :categori="coctail.categories[0]"
                :categorySlug="coctail.categorySlug"
                :name="coctail.title"
                :rating="coctail.averageRating"
                :ingridients="coctail.ingredients.length"
                :time="coctail.timeInMins"
                :image="coctail.imageUrl"
                :label="coctail.title"
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
