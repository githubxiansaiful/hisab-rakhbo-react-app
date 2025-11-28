import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/User/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            path: '/',
            element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        }
    ]
  },
]);
