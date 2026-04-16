import Footer from "../components/layout/Footer";
import { useCartContext } from "../hooks/useCartContext";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity } = useCartContext();

    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const shipping = cart.length > 0 ? 0 : 0; // puedes cambiar lógica después
    const total = subtotal + shipping;

    if (cart.length === 0) {
        return (
            <>
                <main className="pt-24 px-6 max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-on-surface">
                        El carro esta vacio.
                    </h2>
                    <p className="text-on-surface-variant mt-2">
                        Añada algun producto para continuar.
                    </p>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <main className="pt-24 px-6 max-w-2xl mx-auto pb-20">
                {/* HEADER */}
                <div className="mb-8">
                    <h2 className="text-3xl font-extrabold text-on-surface">
                        Tú selección.
                    </h2>
                    <p className="text-on-surface-variant text-sm mt-1">
                        {cart.length} elemento{cart.length !== 1 ? "s" : ""} en el carro.
                    </p>
                </div>

                {/* CART ITEMS */}
                <section className="space-y-4">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="bg-surface-container-lowest rounded-2xl p-4 flex gap-4 border border-surface-variant/50"
                        >
                            <img
                                src={`https://picsum.photos/id/${item.id}/300/200`}
                                alt={item.name}
                                className="w-24 h-24 rounded-xl bg-surface-container-high flex items-center justify-center"
                                onError={(e) => {
                                    e.currentTarget.src = "/noimage.png";
                                }}
                            />

                            {/* CONTENT */}
                            <div className="flex flex-col justify-between flex-grow">
                                {/* TOP */}
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-on-surface">
                                            {item.name}
                                        </h3>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-outline hover:text-error transition-colors"
                                    >
                                        🗑
                                    </button>
                                </div>

                                {/* BOTTOM */}
                                <div className="flex justify-between items-end">
                                    {/* cantidad */}
                                    <div className="flex items-center bg-surface-container rounded-full px-2 py-1 gap-3">
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, item.quantity - 1)
                                            }
                                            className="w-6 h-6 flex items-center justify-center"
                                        >
                                            -
                                        </button>

                                        <span className="text-xs font-bold">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, item.quantity + 1)
                                            }
                                            className="w-6 h-6 flex items-center justify-center"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* precio */}
                                    <span className="font-bold text-primary">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* resumen */}
                <section className="mt-12 bg-surface-container-low rounded-3xl p-6 border border-surface-variant/30">
                    <h4 className="font-bold mb-4">Resumen</h4>

                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span>Subtotal</span>
                            <span className="font-bold">${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-sm">
                            <span>Envio</span>
                            <span className="font-bold text-tertiary">Gratis</span>
                        </div>

                        <div className="h-px bg-outline-variant/20 my-2" />

                        <div className="flex justify-between items-center">
                            <span className="font-bold text-lg">Total</span>
                            <span className="font-extrabold text-2xl text-primary">
                                ${total.toFixed(2)}
                            </span>
                        </div>
                    </div>

                    {/* pago */}
                    <button className="w-full mt-8 py-4 bg-primary text-on-primary rounded-full font-bold">
                        Proceder al pago
                    </button>

                    <p className="text-center text-[10px] text-on-surface-variant mt-4">
                        Pago seguro
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}