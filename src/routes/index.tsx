import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";

import Layout from "../layouts";
import Loading from "../components/Loading";

// 页面组件
import Home from "../pages/Home";
const About = lazy(() => import("../pages/About"));
const Articles = lazy(() => import("../pages/Articles"));
const Dynamic = lazy(() => import("../pages/Dynamic"));
const FriendsLink = lazy(() => import("../pages/FriendsLink"));
const Archives = lazy(() => import("../pages/Archives"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { layout: "board" },
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
        handle: { title: "关于", layout: "other" },
      },
      {
        path: "articles",
        element: (
          <Suspense fallback={<Loading />}>
            <Articles />
          </Suspense>
        ),
        handle: { title: "文章", layout: "other" },
      },
      {
        path: "dynamic",
        element: (
          <Suspense fallback={<Loading />}>
            <Dynamic />
          </Suspense>
        ),
        handle: { title: "动态", layout: "other" },
      },
      {
        path: "friends",
        element: (
          <Suspense fallback={<Loading />}>
            <FriendsLink />
          </Suspense>
        ),
        handle: { title: "友情链接", layout: "other" },
      },
      {
        path: "archives",
        element: (
          <Suspense fallback={<Loading />}>
            <Archives />
          </Suspense>
        ),
        handle: { title: "归档", layout: "other" },
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading />}>
            <div> 404 Not Found </div>
          </Suspense>
        ),
        handle: { title: "404 Not Found", layout: "other" },
      },
    ],
  },
];
