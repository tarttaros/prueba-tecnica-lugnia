import { useState } from "react";
import { useCategories } from "../../hooks/useCategories";

type Filters = {
  category: string;
  minPrice: number;
  maxPrice: number;
};

type Props = {

    setOpenFilters: (value: boolean) => void;
    onApplyFilters: (filters: Filters) => void;

}

export default function SidebarFilters({ setOpenFilters, onApplyFilters }: Props) {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(3000)
    const [activeCategory, setActiveCategory] = useState('All Items');
    const { categories = [] } = useCategories() || [];

    const handleApply = () => {
        onApplyFilters({
            category: activeCategory,
            minPrice,
            maxPrice,
        });

        setOpenFilters(false);
    };

    const handleClear = () => {
        setMinPrice(0);
        setMaxPrice(3000);
        setActiveCategory("All Items");

        onApplyFilters({
            minPrice: 0,
            maxPrice: 3000,
            category: "All Items",
        });
    };

    return (
        <div className="fixed inset-0 z-40 flex pb-20">
            < div
                className="absolute inset-0 bg-black/40"
                onClick={() => setOpenFilters(false)}
            />
            < aside className="relative w-80 h-full overflow-y-auto w-72 h-full p-5 bg-surface-container flex flex-col gap-6" >

                {/* Header */}
                < h2 className="text-lg font-bold text-on-surface" >
                    Filtros
                </h2 >

                <button
                    onClick={handleClear}
                    className="px-5 py-2.5 rounded-full font-bold text-sm bg-primary text-on-primary hover:opacity-70"
                >
                    Limpiar filtros
                </button>

                <section className="mb-10">
                    <h3 className="text-sm font-semibold text-on-surface mb-4">Precio</h3>

                    <div className="flex flex-col gap-2">
                        {[
                            { label: 'Todos', min: 0, max: 3000 },
                            { label: 'Menos de $500', min: 0, max: 500 },
                            { label: '$500 — $1000', min: 500, max: 1000 },
                            { label: '$1000 — $2000', min: 1000, max: 2000 },
                            { label: 'Más de $2000', min: 2000, max: 3000 },
                        ].map((range) => (
                            <button
                                key={range.label}
                                onClick={() => { setMinPrice(range.min); setMaxPrice(range.max); }}
                                className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${minPrice === range.min && maxPrice === range.max
                                    ? 'bg-primary text-on-primary'
                                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                                    }`}
                            >
                                {range.label}
                            </button>
                        ))}
                    </div>
                </section>

                {/* CATEGORIES */}

                <div className="flex flex-col gap-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.title)}
                            className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 ${activeCategory === category.title
                                ? 'bg-primary text-on-primary shadow-sm shadow-primary/20'
                                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                                }`}
                        >
                            <span className="font-label font-bold text-sm">
                                {category.title}
                            </span>
                        </button>
                    ))}
                </div>
                <button
                    className="px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 bg-primary text-on-primary shadow-sm shadow-primary/20"
                    onClick={handleApply}
                >
                    Seleccionar filtros
                </button>
            </aside >
        </div >
    )
}