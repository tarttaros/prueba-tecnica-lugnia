type Props = {
    onSearch: (value: string) => void;
};

export default function Searchbar({ onSearch }: Props) {
    return (
        <section className="mb-8">
            <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
                    <span className="material-symbols-outlined text-[20px]" data-icon="search">
                        search
                    </span>
                </div>
                <input
                    className="w-full h-14 bg-surface-container-highest border-none rounded-2xl pl-12 pr-4 text-on-surface-variant focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/60"
                    placeholder="Buscar producto..."
                    type="text"
                    onChange={(e) => onSearch(e.target.value)} />
            </div>
        </section>
    )
}