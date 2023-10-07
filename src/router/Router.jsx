import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServicesDetails from "../pages/ServicesDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            
        },
        {
            path: '/services',
            element: <Services></Services>,
            loader: () => fetch('/services.json')
        },
        {
            path: '/services/:id',
            element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
            
        },
        {
            path: '/login',
            element: <Login></Login>,
            
        },
        {
            path: '/register',
            element: <Register></Register>,
            
        },
      ]
    },
  ]);

export default router;