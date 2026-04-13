export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 dark:bg-on-background/80 backdrop-blur-xl flex items-center justify-between px-6 py-4 w-full">
            <div className="flex items-center gap-4">
                <button className="active:scale-95 transition-transform duration-200 text-on-surface/60">
                    <span className="material-symbols-outlined text-tertiary" data-icon="menu">menu</span>
                </button>
                <span className="font-headline text-xl font-bold tracking-tight text-primary italic">Lumiere</span>
            </div>
            <div className="flex items-center gap-4">
                <button className="active:scale-95 transition-transform duration-200 text-on-surface/60">
                    <span className="material-symbols-outlined text-tertiary" data-icon="shopping_bag">shopping_bag</span>
                </button>
            </div>
        </header>
    )
}