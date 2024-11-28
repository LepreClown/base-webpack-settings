import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AboutLazy} from "@/pages/about/About.lazy";
import {ShopLazy} from "@/pages/shop/Shop.lazy";
import {CartLazy} from "@/pages/cart/Cart.lazy";
import {Suspense} from "react";

const root = document.getElementById('root');

if (!root) {
  throw new Error('root is undefined');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/about",
        element: <Suspense><AboutLazy/></Suspense>,
      },
      {
        path: "/shop",
        element: <Suspense><ShopLazy/></Suspense>,
      },
      {
        path: "/cart",
        element: <Suspense><CartLazy/></Suspense>,
      },
    ]
  }
])

container.render(<RouterProvider router={router}/>);