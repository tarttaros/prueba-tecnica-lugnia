import type { product } from "./product.types";

export type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
};