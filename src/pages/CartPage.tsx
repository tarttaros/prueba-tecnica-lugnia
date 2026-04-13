export default function CartPage() {
    return (
        <main className="pt-24 px-6 max-w-2xl mx-auto">
            {/*<!-- Header Section -->*/}
            <div className="mb-8">
                <h2 className="headline-font text-3xl font-extrabold text-on-surface tracking-tight">Your Selection</h2>
                <p className="text-on-surface-variant text-sm mt-1">3 items awaiting checkout</p>
            </div>
            {/*<!-- Cart Items List -->*/}
            <section className="space-y-4">
                {/*<!-- Item 1 -->*/}
                <div className="bg-surface-container-lowest rounded-2xl p-4 flex gap-4 transition-transform active:scale-[0.98] border border-surface-variant/50">
                    <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container-high">
                        <img className="w-full h-full object-cover" data-alt="studio shot of premium ceramic pour-over coffee dripper in minimalist matte white finish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBZsEVwbzTqqjsyf63HI0PGNpi-Q1EHuCerEAUOOBdRPjBuReN-1Jel6i_dXHOVCi1zT818Yr-wwaX85LLn193Tg95V268DmFQRswdVKZdzDFUs1tcriZdGNbJSolRD5cS8jKRozWElK_zQwP9xM0BcdmKbHpEvRxgImHQhsbLCRTktC-9NoCeuJ3nUJrLvgtEtCpc-4Z94E1lmv1whomz0Pp9y_gbWILG9I1idjF60e5ZPr6pvc95qWM3ZT96vTuJFjZ-FBni4Wgw" />
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary">Living</span>
                                <h3 className="font-bold text-on-surface leading-tight mt-0.5">Minimalist Ceramic Dripper</h3>
                            </div>
                            <button className="text-outline hover:text-error transition-colors">
                                <span className="material-symbols-outlined text-xl">delete</span>
                            </button>
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="flex items-center bg-surface-container rounded-full px-2 py-1 gap-3">
                                <button className="w-6 h-6 flex items-center justify-center text-on-surface-variant"><span className="material-symbols-outlined text-sm">remove</span></button>
                                <span className="text-xs font-bold text-on-surface">1</span>
                                <button className="w-6 h-6 flex items-center justify-center text-on-surface-variant"><span className="material-symbols-outlined text-sm">add</span></button>
                            </div>
                            <span className="font-bold text-primary">$42.00</span>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Order Summary -->*/}
            <section className="mt-12 bg-surface-container-low rounded-3xl p-6 border border-surface-variant/30">
                <h4 className="font-bold text-on-surface mb-4">Summary</h4>
                <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-on-surface-variant">Subtotal</span>
                        <span className="font-bold text-on-surface">$283.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-on-surface-variant">Shipping</span>
                        <span className="font-bold text-tertiary">Free</span>
                    </div>
                    <div className="h-px bg-outline-variant/20 my-2"></div>
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-lg text-on-surface">Total</span>
                        <span className="font-extrabold text-2xl text-primary tracking-tight">$283.00</span>
                    </div>
                </div>
                {/*<!-- Checkout Button -->*/}
                <button className="w-full mt-8 py-4 bg-primary text-on-primary rounded-full font-bold shadow-lg shadow-primary/20 active:scale-95 active:shadow-none transition-all duration-300">
                    Proceed to Checkout
                </button>
                <p className="text-center text-[10px] text-on-surface-variant mt-4 uppercase tracking-[0.2em] font-semibold">Secure Checkout Powered by CuratorPay</p>
            </section>
        </main>
    )
}