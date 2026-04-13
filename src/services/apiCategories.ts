import type { category } from "../types/category.types"

export const getCategories = async (): Promise<category[]> => {
    const response = await fetch("https://api.fake-rest.refine.dev/categories");

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const categories = await response.json();

    return [
        { id: 0, title: "All Items" },
        ...categories,
    ];
};