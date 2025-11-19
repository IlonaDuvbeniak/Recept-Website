<script>
    import { getData} from '../FetchData.vue'
    import Card from '../components/Card.vue'

    export default {
        components: {
            Card
        },
        data() {
            return {
                coctails: []
            }
        },
        async mounted() {
            try {
                const data = await getData()
                this.coctails = data.coctails
            } catch (err) {
                console.log(err)
            }
        }
    }
</script>

<template>
    <div class="cards-container">
        <Card
            v-for="coctail in coctails"
            :key="coctail.id"
            :categori="coctail.categori"
            :name="coctail.name"
            :rating="coctail.rating"
            :ingridients="coctail.ingridients"
            :time="coctail.time"
            :image="coctail.image"
            :label="coctail.name"
            :to="{ name: 'recipe', params: { slug: coctail.slug } }"
        />
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