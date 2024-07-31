import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../layouts";
import { ProductsDetails, Shop } from "../pages";

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
        element: <ProductsDetails />
      }
    ],
  },
]);

export default routes;
