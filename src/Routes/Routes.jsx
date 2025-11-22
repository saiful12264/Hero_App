import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";

import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Install from "../Pages/Install";


 const router = createBrowserRouter([
  {
    path:'/',
    Component:Mainlayout,
    errorElement:<Error></Error>,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/apps',
            Component:Apps
        },
        {
            path:"/install",
            Component:Install
        }
    ]

   
  }
])

export default router;