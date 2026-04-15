import { useProducts } from "../hooks/useProducts"
import { useEffect, useState } from "react"
import ProductsGrid from "../components/products/ProductsGrid"
import Loading from "../components/layout/Loading"
import Searchbar from "../components/layout/Searchbar"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import SidebarFilters from "../components/filterComp/SidebarFilters"

export default function ProductsPage() {
    const { products, loading } = useProducts()
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const pageSize = 8;
    const [openFilters, setOpenFilters] = useState<boolean>(false);
    const [filters, setFilters] = useState({
        category: 'All Items',
        minPrice: 0,
        maxPrice: 3000
    });

    /*Usado para reiniciar el paginador
    pero puede generar re render*/
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPage(1);
    }, [filters, search]);

    if (loading) {
        return (
            <Loading />
        )
    }

    const filteredProducts = products.filter((p) => {
        const matchesCategory =
            filters.category === "All Items" ||
            p.category.title === filters.category;

        const matchesSearch =
            p.name.toLowerCase()
                .includes(search
                    .toLowerCase());

        const matchedPrice =
            p.price >= filters.minPrice &&
            p.price <= filters.maxPrice

        return matchesCategory && matchesSearch && matchedPrice;
    });

    const paginatedProducts = filteredProducts.slice(
        (page - 1) * pageSize,
        page * pageSize
    );

    const totalPages = filteredProducts.length === 0
        ? 0
        : Math.ceil(filteredProducts.length / pageSize);

    return (
        <>
            <Navbar openFilters={openFilters} setOpenFilters={setOpenFilters} />
            {openFilters && <SidebarFilters setOpenFilters={setOpenFilters} onApplyFilters={setFilters} />}
            <div className="font-sans bg-background text-on-surface min-h-screen" >
                <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto">
                    {totalPages === 0 ? (
                        <p className="text-center text-on-surface-variant">
                            No hay productos
                        </p>
                    ) : (
                        <>
                            <Searchbar onSearch={setSearch} />
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
                                    disabled={page === totalPages || totalPages === 1}
                                    onClick={() => setPage((p) => p + 1)}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )}
                </main>
            </div >
            <Footer />
        </>
    )
}