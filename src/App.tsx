import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { routes } from "./routes";
import { store } from "./store";

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </Provider>
  );
}
