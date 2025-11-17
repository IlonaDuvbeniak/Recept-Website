<script>
    import Header from './components/Header.vue'
    import BreadCrumbs from './components/BreadCrumbs.vue';
    import CardsGrid from './components/CardsGrid.vue';
    import Button from './components/Button.vue'

    export default {
        components: {
            Button,
            Header,
            BreadCrumbs,
            CardsGrid,

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

    <!-- <Header/> -->
    <BreadCrumbs></BreadCrumbs>
    <router-view></router-view>

    <CardsGrid/>

<!-- EXAMPLE OF USING BUTTON.VUE -->
    <Button btnText="Click" variant="primary" :showArrow="true" :disabled="false"></Button>


</template>

<style scoped>
    .cards-container {
        display: grid;
        grid-template-columns: auto auto auto;
        width: 100%;
        gap: 24px;
    }
</style>
