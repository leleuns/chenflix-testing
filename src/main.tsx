import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/shared/Layout.tsx";
import Course from "./components/Course.tsx";
import { courses } from "./coursedata/courses.ts";
// import { courses } from "./coursedata/courses.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/courses/:abbreviation",
    element: <Course />,
    loader: ({ params }) => {
      // return params;
      const found: Course | undefined = courses.find(
        (course) => course.abbreviation === params.abbreviation
      );
      return found ?? null;
    },
    errorElement: <div>Course not found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Layout>
    <RouterProvider router={router} />
  </Layout>
);
