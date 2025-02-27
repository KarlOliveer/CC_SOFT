import { Navigate } from "react-router-dom";

export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
