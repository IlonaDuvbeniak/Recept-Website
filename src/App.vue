<script>
    // import { RouterLink, RouterView } from 'vue-router'
    import Card from './components/Card.vue'

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
                const res = await fetch('./recipesData.json')
                const data = await res.json()
                this.coctails = data.coctails
            } catch (err) {
                console.error(err)
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
        />
    </div>
</template>

<style scoped>
    .cards-container {
        display: grid;
        grid-template-columns: auto auto auto;
        width: 100%;
        gap: 24px;
    }
</style>
