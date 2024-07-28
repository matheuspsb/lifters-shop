import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../layouts";
import { Shop } from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Shop />,
      },
    ],
  },
]);

export default routes;
