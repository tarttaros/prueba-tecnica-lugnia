import { useProducts } from "../hooks/useProducts"
import { useCategories } from "../hooks/useCategories"
import { useState } from "react"
import type { productWCategory } from "../types/product.types"
import type { category } from "../types/category.types"
import ProductsGrid from "../components/layout/products/ProductsGrid"
import Loading from "../components/layout/Loading"

export default function ProductsPage() {
    const { products, loading, error } = useProducts() as { products: productWCategory[], loading: boolean, error: string }
    const { categories } = useCategories() as { categories: category[] }
    const [activeCategory, setActiveCategory] = useState('All Items');

    if (loading) {
        return (
            <Loading />
        )
    }

    if (error) {
        return (
            <div>Ocurrió un error: {error}</div>
        )
    }

    const filteredProducts =
        activeCategory === "All Items"
            ? products
            : products.filter((p) => p.category.title === activeCategory);

    return (
        <div className="font-sans bg-background text-on-surface min-h-screen" >
            <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto">
                {/*Search Section*/}
                <section className="mb-8">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
                            <span className="material-symbols-outlined text-[20px]" data-icon="search">search</span>
                        </div>
                        <input className="w-full h-14 bg-surface-container-highest border-none rounded-2xl pl-12 pr-4 text-on-surface-variant focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/60" placeholder="Search product..." type="text" />
                    </div>
                </section>
                {/*Category Chips*/}
                <div className="flex gap-3 overflow-x-auto no-scrollbar mb-8 -mx-6 px-6 ">
                    {categories.map((categories) => (
                        <button
                            key={categories.id}
                            onClick={() => setActiveCategory(categories.title)}
                            className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 ${activeCategory === categories.title
                                ? 'bg-primary text-on-primary shadow-sm shadow-primary/20'
                                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                                }`}
                        >
                            {categories.title}
                        </button>
                    ))}
                </div>
                <ProductsGrid products={filteredProducts} />
            </main>
        </div >
    )
}