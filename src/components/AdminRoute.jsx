import { Navigate } from "react-router";

export const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/admin/login" />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};
