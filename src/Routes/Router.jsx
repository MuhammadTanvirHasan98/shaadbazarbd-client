import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Shared/ProductCard/ProductDetails";
import Collections from "../Pages/Collections/Collections";
import Cart from "../Components/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_AXIOS_API}/product/${params.id}`),
      },
      {
        path: "/collections",
        element: <Collections />,
        loader: () => fetch(`${import.meta.env.VITE_AXIOS_API}/allProducts`),
      },
      {
        path: "/collections/:category",
        element: <Collections />,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_AXIOS_API}/allProducts/?category=${
              params.category
            }`
          ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
