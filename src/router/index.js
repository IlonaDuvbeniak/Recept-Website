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
      meta: { 
        title: 'Drinks - Startsida',
        description: 'First page that includes herosection, some recipes, search bar and category navigation.' 
      }
    },
    { 
      path: "/recipes", 
      name: "recepies", // change mistake here
      component: RecepiesView,
      meta: { 
        title: 'Alla Recept',
        description: 'Page with all the recipes with mixed categories.' 
      }
    },
    {
      path: "/recipes/category/:categorySlug",
      name: "category",
      component: CategoryView,
      meta: { 
        title: 'Category' 
      }
    },
    {
      path: "/recipes/:slug",
      name: "recipe",
      component: RecipeView,
      props: true,
      meta: { 
        title: 'Recept' 
      }
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

router.beforeEach((to, from, next) => {
  console.log("Setting title to:", to.meta?.title);
  document.title = to.meta?.title;
  next();
});

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title;
  next();
});

router.afterEach((to) => {

  if (to.meta.description) {
    let descriptionTag = document.querySelector('meta[name="description"]');

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute("content", to.meta.description);
  }
});

export default router;
