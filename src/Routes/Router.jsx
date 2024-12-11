import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Shared/ProductCard/ProductDetails";
import Collections from "../Pages/Collections/Collections";
import Cart from "../Components/Cart/Cart";
import Wishlist from "../Components/Wishlist/Wishlist";
import PrivateRoute from "./PrivateRoute";
import SearchResult from "../Pages/SearchResult/SearchResult";
import DashboardLayout from "../Layouts/DashboardLayout";
import AddProduct from "../Pages/Dashboard/AddProduct";
import DasAllProducts from "../Pages/Dashboard/DasAllProducts";

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
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_AXIOS_API}/product/${params.id}`),
      },
      {
        path: "/collections",
        element: <Collections />,
        loader: () => fetch(`${import.meta.env.VITE_AXIOS_API}/allProducts`),
      },
      {
        path: "/searchProduct/:search",
        element: <SearchResult />,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_AXIOS_API}/allProducts/?search=${
              params.search
            }`
          ),
        // loader: ({ params }) => console.log(params),
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
        path: "/wishList",
        element: <Wishlist />,
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
  {
    path: "/dashboard",
    element: (
      // <PrivateRoute>
      <DashboardLayout />
      // </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      // User Routes
      {
        index: true,
        element: <h1>Dashboard!</h1>,
        // element: (
        //   // <PrivateRoute>
        //     <UserProfile />
        //   // </PrivateRoute>
        // ),
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "allProducts",
        element: <DasAllProducts />,
      },
    ],
  },
]);

export default router;
