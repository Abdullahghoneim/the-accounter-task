import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/auth.context";

const ProtectedRoute = ({ children }) => {
    const { authState } = useContext(AuthContext);

    if (!authState.isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;