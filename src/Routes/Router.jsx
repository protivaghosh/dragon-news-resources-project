import {createBrowserRouter, Navigate,} from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../Page/CategoryNews";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Page/Login";
import Register from "../Page/Register";
import NewsCard from "../Components/NewsCard";
import NewsDetails from "../Page/NewsDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
        path:"",
        element:<Navigate to={"/category/01"}></Navigate>,
        },
        {
          path: "/category/:id",
          element:<CategoryNews></CategoryNews>,
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        },
      ],
    },
    {
        path: "/news/:id",
        element:<NewsDetails></NewsDetails>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
      },
      {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children:[
          {
            path:"/auth/login",
            element:<Login></Login>,
          },
          {
            path:"/auth/register",
            element:<Register></Register>,
          }
        ],
      },
      {
        path: "*",
        element: <div>ERROR</div>,
      },
]);



export default router;