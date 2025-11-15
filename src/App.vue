<script>
    // import { RouterLink, RouterView } from 'vue-router'
    import Header from './components/Header.vue'
    import CardsGrid from './components/CardsGrid.vue';
    import Button from './components/Button.vue'

    export default {
        components: {
            CardsGrid,
            Header,
            Button
        }
    }
</script>

<template>
    <router-link to="/">Home</router-link>
    <router-link to="/recipes">Recipes</router-link>
    <router-view></router-view>

    <Header/>
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
