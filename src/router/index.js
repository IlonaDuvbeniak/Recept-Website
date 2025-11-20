import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RecepiesView from "../views/RecipesView.vue";
import RecipeView from "../views/RecipeView.vue";
import CategoryView from "@/views/CategoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/recipes", name: "recepies", component: RecepiesView },
    {
      path: "/recipes/category/:categoryId",
      name: "category",
      component: CategoryView,
    },
    {
      path: "/recipes/:slug",
      name: "recipe",
      component: RecipeView,
      props: true,
    },
  ],
});

export default router;
