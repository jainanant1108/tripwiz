// @ts-nocheck
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Login, Signup } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function Approuter() {
  return <RouterProvider router={router} />;
}

export default Approuter;
