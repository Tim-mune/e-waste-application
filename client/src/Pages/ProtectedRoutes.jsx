import { useGlobalContext } from "../context/appcontext";
import { Navigate } from "react-router-dom";
// import { Loading } from "../components";
const ProtectedRoute = ({ children }) => {
  const { user } = useGlobalContext();
  if (!user) {
    return <Navigate to="/landing" />;
  } else {
    return children;
  }
};
export default ProtectedRoute;
