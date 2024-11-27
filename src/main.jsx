import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Layout1 from "./layouts/Layout1";
import Home from "./components/Home";
import About from "./components/About";
import VansList, { loader as VansListLoader } from "./components/VansList";
import startApiServer from "./server";
import VanDetail, { loader as VanDetailLoader } from "./components/VanDetail";
import Host, { loader as HostLoader } from "./components/Host";
import HostDashboard, {
  loader as HostDashboardLoader,
} from "./components/HostDashboard";
import HostIncome from "./components/HostIncome";
import HostVans, { loader as HostVansLoader } from "./components/HostVans";
import HostReviews from "./components/HostReviews";
import HostVan, { loader as HostVanLoader } from "./components/HostVan";
import HostVanDetails from "./components/HostVanDetails";
import HostVanPricing from "./components/HostVanPricing";
import HostVanPhotos from "./components/HostVanPhotos";
import Login, {
  loader as LoginLoader,
  action as LoginAction,
} from "./components/Login";
import { authenticateToken } from "./scripts";

startApiServer();

function Router() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout1 />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },

        {
          path: "about",
          element: <About />,
        },

        {
          path: "vans",
          element: <VansList />,
          loader: VansListLoader,
        },

        {
          path: "vans/:id",
          element: <VanDetail />,
          loader: VanDetailLoader,
        },
        {
          path: "login",
          element: <Login />,
          loader: LoginLoader,
          action: LoginAction,
        },
        {
          path: "host",
          element: <Host />,
          loader: async ({ request }) => {
            await authenticateToken(request);
            return HostLoader();
          },

          children: [
            {
              index: true,
              element: <HostDashboard />,
              loader: HostDashboardLoader,
            },
            {
              path: "income",
              element: <HostIncome />,
            },
            {
              path: "vans",
              element: <HostVans />,
              loader: HostVansLoader,
            },
            {
              path: "vans/:id",
              element: <HostVan />,
              loader: HostVanLoader,
              children: [
                {
                  index: true,
                  element: <HostVanDetails />,
                },
                {
                  path: "pricing",
                  element: <HostVanPricing />,
                },
                {
                  path: "photos",
                  element: <HostVanPhotos />,
                },
              ],
            },
            {
              path: "reviews",
              element: <HostReviews />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={browserRouter} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
