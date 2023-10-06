import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/services.json')
        },
        {
            path: '/services',
            element: <Services></Services>,
            
        },
      ]
    },
  ]);

export default router;