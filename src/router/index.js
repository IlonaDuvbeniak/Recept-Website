import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RecepiesView from "../views/RecipesView.vue";
import RecipeView from "../views/RecipeView.vue";
import CategoryView from "@/views/CategoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: "/", 
      name: "home", 
      component: HomeView,
      meta: { title: 'Drinks - Startsida' }
    },
    { 
      path: "/recipes", 
      name: "recepies", 
      component: RecepiesView,
      meta: { title: 'Alla Recept' }
    },
    {
      path: "/recipes/category/:categorySlug",
      name: "category",
      component: CategoryView,
      meta: { title: 'Kategory' }
    },
    {
      path: "/recipes/:slug",
      name: "recipe",
      component: RecipeView,
      props: true,
      meta: { title: 'Recept' }
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title;
  next();
});

export default router;
