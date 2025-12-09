let cachedCategories = null;

export async function fetchCategories() {
  try {
    if (cachedCategories) {
      console.log("Returning categories from cache");
      return cachedCategories;
    }

    console.log("Gets categories from API");
    const response = await fetch(
      "https://recipes.bocs.se/api/v1/d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a/categories"
    );
    const data = await response.json();

    cachedCategories = data;
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
