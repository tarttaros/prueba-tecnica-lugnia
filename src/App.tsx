import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./providers/cartProvider";

function App() {

  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProductsPage />}
        />

        <Route
          path="/cart"
          element={
            <CartPage/>
          }
        />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
