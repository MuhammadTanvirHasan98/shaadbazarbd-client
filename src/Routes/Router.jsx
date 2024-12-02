import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <h1>Home Page</h1>,
      },
      {
        path: "/allProducts",
        element: <h1>All Products Page</h1>,
      },
      {
        path: "/productDetails",
        element: <h1>Product details page</h1>,
      },
    ],
  },
]);

export default router;
