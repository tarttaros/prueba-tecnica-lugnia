import { useCart } from "../hooks/useCart";
import { CartContext } from "../context/CartContext";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props) {
  const cartState = useCart();

  return (
    <CartContext.Provider value={cartState}>
      {children}
    </CartContext.Provider>
  );
}