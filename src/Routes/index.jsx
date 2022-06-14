import { useRoutes } from "react-router-dom";
import LoginPage from "../Pages/Login/index.";
import Home from "../Pages/Home/index";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "login", element: <LoginPage /> },
    {
      path: "",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
  ]);
  return routes;
};

export default AppRoutes;
