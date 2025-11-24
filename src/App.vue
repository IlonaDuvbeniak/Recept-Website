<script>
import Header from './components/Header.vue'
import BreadCrumbs from './components/BreadCrumbs.vue';

export default {
    components: {
        Header,
        BreadCrumbs
    }
}
</script>

<template>
    <Header :to="{ name: 'home' }" />
    <BreadCrumbs></BreadCrumbs>
    <router-view></router-view>
</template>

<style scoped>
</style>
