
import axios from 'axios';
import { slugify } from '@/utils/slugify.js';

let cachedRecipes = null;


export async function fetchData() {

    if (cachedRecipes) {
        // console.log("Returning recipes from cache");
        return cachedRecipes;
    }
    try {
        const response = await axios.get("https://recipes.bocs.se/api/v1/d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a/recipes");
        const list = response.data;

        const detailedRecipes = await Promise.all(
            list.map(async (recipe) => {
                const detail = await axios.get(`https://recipes.bocs.se/api/v1/d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a/recipes/${recipe.id}`);

                const fullRecipe = detail.data;
                // console.log(fullRecipe)

                return {
                    ...fullRecipe,
                    slug: slugify(fullRecipe.title),
                    categorySlug: slugify(fullRecipe.categories[0])
                };
            })
        );
        cachedRecipes = detailedRecipes;
        return detailedRecipes;

    } catch (err) {
        console.error("API error:", err);
        return [];
    }
}

