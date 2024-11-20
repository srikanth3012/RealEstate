import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomePage from "./routes/HomePage/HomePage";
import Layout from "./routes/Layout/Layout";
const ListPage = lazy(() => import("./routes/ListPage/ListPage"));
const SinglePage = lazy(() => import("./routes/SingelPage/SinglePage"));
const ProfilePage = lazy(() => import("./routes/ProfilePage/Profile"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/listPage",
        element: (
          <Suspense>
            <ListPage />
          </Suspense>
        ),
      },
      {
        path: "/listPage/:id",
        element: (
          <Suspense>
            <SinglePage />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense>
            <ProfilePage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
