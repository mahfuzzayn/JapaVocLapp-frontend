import { Navigate } from "react-router-dom";
import { useUser } from "../components/Lesson/context/UserContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useUser();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
