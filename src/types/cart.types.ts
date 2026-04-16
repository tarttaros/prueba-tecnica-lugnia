import type { product } from "./product.types";


//---- Item del carrito -----------------------------------
export type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

//---- Estructura del cartContext(canal)
export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
};