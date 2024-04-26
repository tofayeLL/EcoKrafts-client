import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddCraft from "../pages/AddCraft/AddCraft";
import MyCraft from "../pages/MyCraft/MyCraft";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/addCraft',
            element:<ProtectedRoutes><AddCraft></AddCraft></ProtectedRoutes>
        },
        
        {
            path:'/myCraft',
            element:<ProtectedRoutes><MyCraft></MyCraft></ProtectedRoutes>
        },
        

      ]
    },
  ]);


  export default router;