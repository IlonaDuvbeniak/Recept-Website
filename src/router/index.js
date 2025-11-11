import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RecepiesView from "../views/RecepiesView.vue";
import RecepieView from "../views/RecipeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/recipes", name: "recepies", component: RecepiesView },
    { path: "/recipe", name: "recipe", component: RecepieView },
  ],
});

export default router;
