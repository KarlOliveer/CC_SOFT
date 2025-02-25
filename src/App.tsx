import { Suspense } from "react";
<<<<<<< HEAD
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useRoutes } from "react-router-dom"; // For tempo-routes
import Home from "./components/home";
import ProjectsPage from "./components/projects/ProjectsPage";
import MaterialsPage from "./components/materials/MaterialPage";
=======
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import ProjectsPage from "./components/projects/ProjectsPage";
>>>>>>> 49493c5 (Primeiro commit)
import Layout from "./components/layout/Layout";
import LoginForm from "./components/auth/LoginForm";
import PrivateRoute from "./components/auth/PrivateRoute";
import UserManagement from "./components/users/UserManagement";
import routes from "tempo-routes";
<<<<<<< HEAD
import RequestsPage from "./components/requests/RequestsPage";

function App() {
  const location = useLocation();

  // Check if the user has an active session
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // Redirect to /login if not authenticated and not already on /login
  const shouldRedirectToLogin = !isAuthenticated && location.pathname !== "/login";

=======

function App() {
>>>>>>> 49493c5 (Primeiro commit)
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/login" element={<LoginForm />} />

        <Route
          path="/"
          element={
<<<<<<< HEAD
            shouldRedirectToLogin ? (
              <Navigate to="/login" replace />
            ) : (
              <PrivateRoute>
                <Layout>
                  <Home />
                </Layout>
              </PrivateRoute>
            )
=======
            <PrivateRoute>
              <Layout>
                <Home />
              </Layout>
            </PrivateRoute>
>>>>>>> 49493c5 (Primeiro commit)
          }
        />

        <Route
          path="/projetos"
          element={
            <PrivateRoute>
              <Layout>
                <ProjectsPage />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/materiais"
          element={
            <PrivateRoute>
              <Layout>
<<<<<<< HEAD
                <MaterialsPage />
=======
                <Home />
>>>>>>> 49493c5 (Primeiro commit)
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/testes"
          element={
            <PrivateRoute>
              <Layout>
                <Home />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/pedidos"
          element={
            <PrivateRoute>
              <Layout>
<<<<<<< HEAD
                <RequestsPage />
=======
                <Home />
>>>>>>> 49493c5 (Primeiro commit)
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/entregas"
          element={
            <PrivateRoute>
              <Layout>
                <Home />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/checklists"
          element={
            <PrivateRoute>
              <Layout>
                <Home />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/usuarios"
          element={
            <PrivateRoute>
              <Layout>
                <UserManagement />
              </Layout>
            </PrivateRoute>
          }
        />

        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}

<<<<<<< HEAD
        {/* Catch-all route */}
        <Route
          path="*"
          element={
            shouldRedirectToLogin ? (
              <Navigate to="/login" replace />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
=======
        <Route path="*" element={<Navigate to="/" replace />} />
>>>>>>> 49493c5 (Primeiro commit)
      </Routes>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
    </Suspense>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 49493c5 (Primeiro commit)
