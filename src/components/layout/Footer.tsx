import { useLocation, Link } from "react-router-dom";

export default function Footer() {
    const location = useLocation();

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
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="font-manrope text-[10px] font-semibold uppercase tracking-widest">
                    Cart
                </span>
            </Link>

        </div>
    )
}