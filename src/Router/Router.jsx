import { createBrowserRouter } from "react-router-dom";
import Root from "../elements/Root/Root";
import Login from "../elements/Login/Login";
import Register from "../elements/Register/Register";
import Home from "../elements/Home/Home";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/resister",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
