import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";

import Layout from "../layouts";
import Loading from "../components/Loading";

// 页面组件
import Home from "../pages/Home";
const About = lazy(() => import("../pages/About"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading />}>
            <div> 404 Not Found </div>
          </Suspense>
        ),
      },
    ],
  },
];
