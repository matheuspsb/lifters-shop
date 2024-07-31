import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryProduct } from "./services/queryProduct";
import routes from "./routes";
import "./App.css";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <QueryClientProvider client={queryProduct}>
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
