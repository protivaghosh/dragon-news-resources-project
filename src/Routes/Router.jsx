import {createBrowserRouter,} from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },
    {
        path: "news",
        element: <div>News Layout</div>,
      },
      {
        path: "auth",
        element: <div>Auth layout</div>,
      },
      {
        path: "*",
        element: <div>ERROR</div>,
      },
]);



export default router;