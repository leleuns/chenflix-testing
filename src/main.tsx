import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/shared/Layout.tsx";
import Course from "./components/Course.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/course",
    element: <Course />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Layout>
    <RouterProvider router={router} />
  </Layout>
);
