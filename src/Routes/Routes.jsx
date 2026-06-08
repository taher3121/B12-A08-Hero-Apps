import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installed from "../Pages/Installed";
import Error from "../Pages/Error";



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path:'/Apps',
        Component: Apps
      },
      {
        path: '/Installation',
        Component: Installed
      }

    
    ]
  },
]);

export default router;