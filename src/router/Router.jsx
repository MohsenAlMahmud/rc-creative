import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('services.json')
        },
        {
            path: '/services',
            element: <Services></Services>,
            
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