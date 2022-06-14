import { useRoutes } from "react-router-dom";
import LoginPage from "../Pages/Login/index.";
import Home from "../Pages/Home/index";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "login", element: <LoginPage /> },
    {
      path: "",
      element: <Home />,
    },
  ]);
  return routes;
};

export default AppRoutes;
