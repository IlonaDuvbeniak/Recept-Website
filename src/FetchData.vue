<script>
import axios from 'axios';
import { slugify } from '@/utils/slugify.js';

export async function fetchData() {
    try {
        const response = await axios.get(
            "https://recipes.bocs.se/api/v1/d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a/recipes/"
        );

        return response.data.map(coctail => {

            return {
                ...coctail,
                slug: slugify(coctail.title),
                categorySlug: slugify(coctail.categories[0])
            }
        });

    } catch (err) {
        console.error("API error:", err);
        return [];
    }
}
</script>
