import { useLocation, Link } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";

export default function Footer() {
    const location = useLocation();
    const { cart } = useCartContext();

    // total de items sumando cantidades
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const isHome = location.pathname === "/";
    const isCart = location.pathname === "/cart";

    return (
        <div className="fixed bottom-0 w-full z-50 rounded-t-[2.5rem] bg-background/80 dark:bg-on-background/80 backdrop-blur-xl flex justify-around items-center h-20 px-8 pb-safe shadow-[0_-8px_32px_rgba(0,33,71,0.08)]">

            {/* HOME */}
            <Link
                to="/"
                className={`flex flex-col items-center gap-1 active:scale-90 transition-all duration-300 ease-out ${isHome ? "text-primary" : "text-on-surface/40"
                    }`}
            >
                <span className="material-symbols-outlined">home</span>
                <span className="font-manrope text-[10px] font-semibold uppercase tracking-widest">
                    Home
                </span>
            </Link>

            {/* CART */}
            <Link
                to="/cart"
                className={`flex flex-col items-center gap-1 active:scale-90 transition-all duration-300 ease-out ${isCart ? "text-primary" : "text-on-surface/40"
                    }`}
            >
                <div className="relative">
                    <span className="material-symbols-outlined">shopping_cart</span>

                    {/* BURBUJA */}
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                            {totalItems > 99 ? "99+" : totalItems}
                        </span>
                    )}
                </div>
                <span className="font-manrope text-[10px] font-semibold uppercase tracking-widest">
                    Cart
                </span>
            </Link>

        </div>
    )
}