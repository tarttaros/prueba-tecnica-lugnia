import { useEffect, useState } from "react";
import type { product } from "../types/product.types";
import type { CartItem } from "../types/cart.types";

export const useCart = () => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Cargar desde localStorage
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Guardar en localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // ➕ Agregar producto
    const addToCart = (product: product) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.id === product.id);

            if (exists) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...prev,
                {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                },
            ];
        });
    };

    // ❌ Eliminar producto
    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    // 🔢 Actualizar cantidad
    const updateQuantity = (id: number, quantity: number) => {
        if (quantity <= 0) return;

        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
    };
};