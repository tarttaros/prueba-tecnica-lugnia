import type { productWCategory } from "../../types/product.types";
import { useCart } from "../../hooks/useCart"

type Props = {
    products: productWCategory[];
};

export default function ProductsGrid({ products }: Props) {

    const { addToCart } = useCart();
    return (
        < div className="grid grid-cols-2 gap-x-4 gap-y-10 " >
            {
                products.map((product, index) => (
                    <div
                        key={product.id}
                        className={`flex flex-col group ${index % 2 === 1 ? "mt-6" : ""}`}
                    >
                        <div className="relative aspect-[3/4] bg-surface-container-lowest rounded-2xl overflow-hidden mb-4 transition-all duration-300 group-hover:shadow-[0_12px_32px_-4px_rgba(0,33,71,0.12)]">
                            <img
                                src={`https://picsum.photos/id/${product.id}/300/200`}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => {
                                    e.currentTarget.src = "/noimage.png";
                                }}
                            />
                            <button className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-lg active:scale-90 transition-transform"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(product);
                                }}
                            >
                                <span className="material-symbols-outlined text-[20px]">
                                    add
                                </span>
                            </button>
                        </div>

                        <span className="text-[10px] uppercase tracking-[0.15em] text-outline mb-1">
                            {product.category.title}
                        </span>

                        <h3 className="text-sm font-bold text-on-surface leading-tight mb-1 group-hover:text-primary transition-colors">
                            {product.name}
                        </h3>

                        <p className="text-sm text-primary font-bold">
                            ${product.price}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}