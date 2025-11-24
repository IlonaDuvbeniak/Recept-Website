<script>
import Button from '@/components/Button.vue';
export default {
    name: "CategoryNavigation",
    components: {
        Button
    }
}
</script>

<template>
    <div class="category-navigation">
        <Button :to="{ name: 'recepies' }" btnText="Alla" variant="filter" :showArrow="false" :disabled="false"
            class="category-button"></Button>
        <Button :to="{ name: 'recepies' }" btnText="Drunk in paradise" variant="filter" :showArrow="false"
            :disabled="false" class="category-button"></Button>
        <Button :to="{ name: 'recepies' }" btnText="Party Like It’s Friday" variant="filter"
            :showArrow="false"></Button>
        <Button to="/recipes/category/post-breakup-potions" btnText="Post-Breakup Potions" variant="filter"
            :showArrow="false"></Button>
        <Button to="/recipes/category/boos-and-brews" btnText="Boos & Brews" variant="filter"
            :showArrow="false"></Button>
        <Button to="/recipes/category/sips-of-christmas" btnText="Sips of Christmas" variant="filter"
            :showArrow="false"></Button>
    </div>
</template>

<style scoped>
.category-navigation {
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 0 120px;
    flex-wrap: wrap;
}

@media (max-width: 767px) {
    .category-navigation {
        padding: 0 24px;
    }
}
</style>
