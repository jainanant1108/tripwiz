// @ts-nocheck
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function Approuter() {
  return <RouterProvider router={router} />;
}

export default Approuter;
