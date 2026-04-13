import { getProducts } from "./apiPropducts";
import { getCategories } from "./apiCategories";

export const getProductsWithCategory = async () => {
    const [products, categories] = await Promise.all([
        getProducts(),
        getCategories(),
    ]);

    return products.map((p) => ({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        material: p.material,
        category: {
            id: p.category.id,
            title: categories.find(c => c.id === p.category.id)?.title ?? "Unknown",
        }
    }));
};