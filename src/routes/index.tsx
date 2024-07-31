import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../layouts";
import { Payment, ProductDetails, Shop, Sucess } from "../pages";

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
        element: <ProductDetails />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/success",
        element: <Sucess />,
      },
    ],
  },
]);

export default routes;
