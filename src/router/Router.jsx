import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServicesDetails from "../pages/ServicesDetails";
import PrivateRoute from "./PrivateRoute";
import Page404 from "../pages/Page404";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/gadget.json')
        },
        {
            path: '/services',
            element: <Services></Services>,
            loader: () => fetch('/services.json')
        },
        {
            path: '/services/:id',
            element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
            loader: () => fetch('/services.json')
            
        },
        {
            path: '/login',
            element: <Login></Login>,
            
        },
        {
            path: '/register',
            element: <Register></Register>,
            
        },
        {
            path: '/*',
            element: <Page404></Page404>,
            
        },
      ]
    },
  ]);

export default router;
