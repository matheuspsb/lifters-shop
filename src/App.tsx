import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryProduct } from "./services/queryProduct";
import { CartProvider } from "./contexts/CartContext";
import routes from "./routes";
import "./App.css";

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
