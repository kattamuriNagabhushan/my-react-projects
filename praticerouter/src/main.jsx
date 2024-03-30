import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from './routes/Root'
import About from "./routes/About";
import Dashboard from "./routes/Dashboard";
import Error from "./routes/Error";
import Rootcontent from "./routes/Rootcontent";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error />,
    children: [
      {
        path: "/rootcontent",
        element: <Rootcontent />,
      },
      {
        path:"/other",
        element: <div>This is from other child</div>
      }
    ],
  },
  {
    path : '/about',
    element : <About/>,

    children :[
      {
        path : "/about/naga",
        element: <div>Hello I am Nagabhushan And I  am children of the about component</div>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,

  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);