import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./providers/cartProvider";
import { useEffect } from "react";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // no renderiza nada
}

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
            <ProductsPage />
          }
          />

          <Route
            path="/cart"
            element={
              <CartPage />
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
