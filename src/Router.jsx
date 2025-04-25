import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./component/About"
import Contactus from "./component/Contactus"
import Error from "./component/Error";
import Body from "./component/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <Error/> ,
    children:[{
      path: "/",
      element: <Body />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contactus />,
    },]
  },
  
]);

export default appRouter;
