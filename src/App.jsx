import {createBrowserRouter, RouterProvider} from "react-router-dom";

import { Applayout } from "./Components/Layout/AppLayout";

import "./own.css" ;

import { Errorpage } from "./Pages/Errorpage";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Country } from "./Pages/Country";
import { Contact } from "./Pages/Contact";
import { CountryDetails } from "./Components/Layout/CountryDetails";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Applayout />,
    errorElement: <Errorpage />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path:"Contact",
        element:<Contact/>
      },
      {
        path: "Country",
        element: <Country />,
      },
      { 
        path: "Country/:id",
        element: <CountryDetails />
      },
      {
        path: "Home",
        element: <Home />,
      }
    ]
  }
  
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App ;