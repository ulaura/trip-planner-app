import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signin from "../components/Authentication/Signin/Signin";
import Signup from "../components/Authentication/Signup/Signup";
import Layout from "../components/Layout/Layout";
import PageHeaderLayout from "../components/Layout/PageHeaderLayout";
import { NavRoute } from "../Types";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: NavRoute.HOME,
        element: (
          <PrivateRoute>
            <App />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    element: <PageHeaderLayout />,
    children: [
      {
        path: NavRoute.SIGNIN,
        element: <Signin />
      },
      {
        path: NavRoute.SIGNUP,
        element: <Signup />,
      },
    ],
  },
]);

export default routes;
