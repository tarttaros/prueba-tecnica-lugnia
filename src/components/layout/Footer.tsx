export default function Footer() {
    return (
        <div className="fixed bottom-0 w-full z-50 rounded-t-[2.5rem] bg-background/80 dark:bg-on-background/80 backdrop-blur-xl flex justify-around items-center h-20 px-8 pb-safe w-full shadow-[0_-8px_32px_rgba(0,33,71,0.08)]" >
            <a className="flex flex-col items-center gap-1 text-on-surface/40 active:scale-90 transition-all duration-300 ease-out" href="#">
                <span className="material-symbols-outlined" data-icon="home">home</span>
                <span className="font-manrope text-[10px] font-semibold uppercase tracking-widest">Home</span>
            </a>
            <a className="flex flex-col items-center gap-1 text-on-surface/40 text-primary relative after:content-[''] after:w-1 after:h-1 after:bg-primary after:rounded-full after:mt-1 active:scale-90 transition-all duration-300 ease-out" href="#">
                <span className="material-symbols-outlined" data-icon="search">search</span>
                <span className="font-manrope text-[10px] font-semibold uppercase tracking-widest">Search</span>
            </a>
            <a className="flex flex-col items-center gap-1 text-on-surface/40 active:scale-90 transition-all duration-300 ease-out" href="#">
                <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                <span className="font-manrope text-[10px] font-semibold uppercase tracking-widest">Cart</span>
            </a>
        </div>
    )
}