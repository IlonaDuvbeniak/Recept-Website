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
    /* .header-component {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
    } */
</style>
