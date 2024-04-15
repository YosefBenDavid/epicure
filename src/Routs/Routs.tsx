import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
    ],
  },
]);
