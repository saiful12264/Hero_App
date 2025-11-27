import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";

import Error from "../Pages/Error";
import GlowingCubeLoader from "../Compoent/GlowingCubeLoader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    errorElement: <Error></Error>,
    hydrateFallbackElement: <GlowingCubeLoader></GlowingCubeLoader>,
    children: [
      {
        index: true,
        lazy: async () => {
          const module = await import("../Pages/Home");
          return { Component: module.default };
        },
      },
      {
        path: "/apps",
        lazy: async () => {
          const module = await import("../Pages/Apps");
          return { Component: module.default };
        },
      },
      {
        path: "/install",
        lazy: async () => {
          const module = await import("../Pages/Install");
          return { Component: module.default };
        },
      },
      {
        path: "/apps/:id",
        lazy: async () => {
          const module = await import("../Pages/App_details");
          return { Component: module.default };
        },
      },
    ],
  },
]);

export default router;
