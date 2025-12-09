import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: "/", 
      name: "home", 
      component: () => import('../views/HomeView.vue'),
      meta: { 
        title: 'Drinks - Startsida',
        description: 'First page that includes herosection, some recipes, search bar and category navigation.' 
      }
    },
    { 
      path: "/recipes", 
      name: "recepies", // change mistake here
      component: () => import('../views/RecipesView.vue'),
      meta: { 
        title: 'Alla Recept',
        description: 'Page with all the recipes with mixed categories.' 
      }
    },
    {
      path: "/recipes/category/:categorySlug",
      name: "category",
      component: () => import('../views/CategoryView.vue'),
      meta: { 
        title: 'Category',
        description: 'Category page that shows only filtered recepies with the same category.'
      }
    },
    {
      path: "/recipes/:slug",
      name: "recipe",
      component: () => import('../views/RecipeView.vue'),
      props: true,
      meta: { 
        title: 'Recept',
        description: 'Recepie page that shows all the details about the recipe. Ingridients, how to cook, has opportunity to sent a review or star-rating.'
      }
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
