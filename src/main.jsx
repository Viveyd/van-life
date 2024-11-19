import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout1 from "./layouts/layout1";
import Home from "./components/Home";
import About from "./components/About";

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
