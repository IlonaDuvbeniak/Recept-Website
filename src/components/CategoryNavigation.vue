<script>
import Button from '@/components/Button.vue';
export default {
    name: "CategoryNavigation",
    components: {
        Button
    },
    computed: {
        NumberOfRecipesInCategory() {
        }
    }
}
</script>

<template>
    <div class="category-navigation">
        <Button :to="{ name: 'recepies' }" btnText="Alla" variant="filter" :showArrow="false" :disabled="false"
            class="category-button"></Button>
        <Button to="/recipes/category/drunk-in-paradise" btnText="Drunk in paradise" variant="filter" :showArrow="false"
            :disabled="false" class="category-button"></Button>
        <Button to="/recipes/category/party-like-its-friday" btnText="Party Like It’s Friday" variant="filter"
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
    margin-bottom: 53px;
}

@media (max-width: 991px) {
    .category-navigation {
        padding: 0 72px;
    }
}

@media (max-width: 767px) {
    .category-navigation {
        padding: 0 52px;
    }
}

@media (max-width: 575px) {
    .category-navigation {
        padding: 0 24px;
    }
}
</style>
