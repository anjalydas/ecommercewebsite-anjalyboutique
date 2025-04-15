import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import { Provider } from "react-redux";
import store from "./app/store";
import Home from "./routes/home";
import Category, {loader as categoryLoader} from "./pages/category";
import Products from "./pages/products";
import ProductPage , {loader as productLoader}from "./pages/productPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <ErrorPage />,
  children:[
    {
    path:"",
    element: <Home />,
    },
    {
      path:"/category/:categoryId",
      element:<Products/>,
    },
    {
      path:"/category",
      element:<Category/>,
      loader:categoryLoader,
    },
    {
      path:"/product/:productId",
      element:<ProductPage/>,
      loader:productLoader,
    },
    
  
  ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
