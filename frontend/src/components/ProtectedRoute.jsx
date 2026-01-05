import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuth, loading } = useAuth();

  if (loading) return <p className="text-center">Loading...</p>;
  return isAuth ? children : <Navigate to="/signin" />;
}

export default ProtectedRoute;
