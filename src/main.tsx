import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./GlobalStyles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AuthenticationContextProvider } from "./context/AuthenticationContext";
import routes from "./Router/RouteMapping";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <RouterProvider router={routes} />
    </AuthenticationContextProvider>
  </React.StrictMode>
);
