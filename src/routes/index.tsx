import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../layouts";
import { ProductDetails, Shop } from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Shop />,
      },
      {
        path: "/produto/:productId",
        element: <ProductDetails />
      }
    ],
  },
]);

export default routes;
