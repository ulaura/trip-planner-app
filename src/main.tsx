import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout/Layout";
import Login from "./components/Authentication/Login/Login";
import PageHeaderLayout from "./components/Layout/PageHeaderLayout";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./GlobalStyles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Signup from "./components/Authentication/Signup/Signup";


const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/home",
        element: <App />,
      },
      {
        path: "/destination-conditions",
        element: (
          <h1>Welcome to destination conditions page. Not implemented yet. </h1>
        ),
      },
    ],
  },
  {
    element: <PageHeaderLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
