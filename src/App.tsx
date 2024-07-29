import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryProduct } from "./services/queryProduct";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <QueryClientProvider client={queryProduct}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}

export default App;
