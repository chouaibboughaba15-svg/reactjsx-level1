import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";


import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home.jsx';
import Html from './pages/html.jsx';
import Css from './pages/css.jsx'
import Javascript from './pages/javascript.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>SORROY.....</h1>
  },

   {
    path: "/html",
    element: <Html/>,
    
  },
   {
    path: "/css",
    element: <Css/>,
    
  },
   {
    path: "/javascript",
    element: <Javascript/>,
   },
  

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <HelmetProvider>
       <RouterProvider router={router} />
      </HelmetProvider>
   
  </StrictMode>
);
