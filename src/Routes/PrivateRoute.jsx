import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import LoadingSpinner from "../Components/Spinner/LoadingSpinner";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingSpinner />;

  if (user) {
    return children;
  }

  return (
    <Navigate to="/login" state={location?.pathname} replace={true}></Navigate>
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.element,
};
