import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import VedaGlobal from "./VedaGlobal";
import LoginPage from "./view/Login";
import Unauthorized from "./view/notautherized";
import AdminLayout from "./Admin/adminlayout";
import Allproducts from "./Admin/allproducts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./protected_route/protected_route";
import Productsbycat from "./view/product_details";
import RedChilliArticle from "./Components/RedChilliArticle";
import CardamomArticle from "./Components/CardamomArticle";
import HoneyArticle from "./Components/HoneyArticle";
import WriteArticle from "./Admin/WriteArticle";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <VedaGlobal />
  },

  { path: "login", element:<LoginPage/> },
  { path: "unauthorized", element: <Unauthorized /> },

  {
    path: "product/:category",
    element: <Productsbycat />
  },
  {
    path: "/redchilli",
    element: <RedChilliArticle />
  },
  {
    path: "/cardamom",
    element: <CardamomArticle />
  },
  {
    path: "/honey",
    element: <HoneyArticle />
  },

  {
    path: "admin",
    element: (
      <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
        <AdminLayout /> 
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Allproducts />
      },
      {
        path: "write",
        element: <WriteArticle />
      },
      
    ]
  }


])



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  setMenuOpen(false); // optional: close mobile menu when clicked
};