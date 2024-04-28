import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddCraft from "../pages/AddCraft/AddCraft";
import MyCraft from "../pages/MyCraft/MyCraft";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import CraftItemDetails from "../pages/CraftItemDetails/CraftItemDetails";
import UpdateCraft from "../pages/UpdateCraft/UpdateCraft";
import AllCrafts from "../pages/AllCrafts/AllCrafts";
import AllCraftDetails from "../pages/AllCrafts/AllCraftDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/addCraft',
        element: <ProtectedRoutes><AddCraft></AddCraft></ProtectedRoutes>
      },

      {
        path: '/myCraft',
        element: <ProtectedRoutes><MyCraft></MyCraft></ProtectedRoutes>
      },

      {
        path: '/crafts/:id',
        element: <CraftItemDetails></CraftItemDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/crafts/${params.id}`)
      },
      {
        path: '/myCraft/:id',
        element: <ProtectedRoutes><UpdateCraft></UpdateCraft></ProtectedRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/myCraft/${params.id}`)

      },
      {
        path: '/allCrafts',
        element: <AllCrafts></AllCrafts>,
        loader: () => fetch('http://localhost:5000/crafts')
      },
      {
        path: '/craft/:id',
        element: <ProtectedRoutes><AllCraftDetails></AllCraftDetails></ProtectedRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/craft/${params.id}`)
      }


    ]
  },
]);


export default router;