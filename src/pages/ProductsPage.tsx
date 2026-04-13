import type { category } from "../types/category.types"
import { useProducts } from "../hooks/useProducts"
import { useCategories } from "../hooks/useCategories"
import { useEffect, useState } from "react"
import ProductsGrid from "../components/products/ProductsGrid"
import Loading from "../components/layout/Loading"
import Searchbar from "../components/layout/Searchbar"
import CategoryChips from "../components/layout/CategoryChips"

export default function ProductsPage() {
    const { products, loading } = useProducts()
    const { categories } = useCategories() as { categories: category[] }
    const [activeCategory, setActiveCategory] = useState('All Items');
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const pageSize = 8;

    /*Usado para reiniciar el paginador
    pero puede generar re render*/
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPage(1);
    }, [activeCategory, search]);

    if (loading) {
        return (
            <Loading />
        )
    }

    const filteredProducts = products.filter((p) => {
        const matchesCategory =
            activeCategory === "All Items" ||
            p.category.title === activeCategory;

        const matchesSearch =
            p.name.toLowerCase()
                .includes(search
                    .toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const paginatedProducts = filteredProducts.slice(
        (page - 1) * pageSize,
        page * pageSize
    );

    const totalPages = Math.ceil(filteredProducts.length / pageSize);

    return (
        <div className="font-sans bg-background text-on-surface min-h-screen" >
            <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto">
                <Searchbar onSearch={setSearch} />
                <CategoryChips
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory} />
                <ProductsGrid products={paginatedProducts} />
                <div className="flex justify-center space-x-2 mt-2">
                    <button
                        className="px-3 py-1 bg-primary text-white rounded disabled:opacity-60"
                        disabled={page === 1}
                        onClick={() => setPage((p) => p - 1)}
                    >
                        Prev
                    </button>

                    <span className="px-3 py-1 rounded bg-secondary">
                        Page {page} of {totalPages}
                    </span>

                    <button
                        className="px-2 py-1 bg-primary text-white rounded disabled:opacity-60"
                        disabled={page === totalPages}
                        onClick={() => setPage((p) => p + 1)}
                    >
                        Next
                    </button>
                </div>
            </main>
        </div >
    )
}