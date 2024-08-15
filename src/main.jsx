import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Component/Layout/Layout";
import Shop from "./Component/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element:   <Layout></Layout>,
    children:[
      {
        path: '/',
        element: <Shop></Shop>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
