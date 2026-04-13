import type { category } from "../../types/category.types"

type Props = {

    categories: category[];
    activeCategory: string;
    setActiveCategory: (value: string) => void;

}

export default function CategoryChips({ categories, activeCategory, setActiveCategory, }: Props) {
    return (
        <div className="flex gap-3 overflow-x-auto no-scrollbar mb-8 -mx-6 px-6 ">
            {categories.slice(0, 4).map((category) => (
                <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.title)}
                    className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 ${activeCategory === category.title
                        ? 'bg-primary text-on-primary shadow-sm shadow-primary/20'
                        : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                        }`}
                >
                    {category.title}
                </button>
            ))}
        </div>
    )
}