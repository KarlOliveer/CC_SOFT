import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import ProjectsPage from "./components/projects/ProjectsPage";
import MaterialsPage from "./components/materials/MaterialPage";
import OrdersPage from "./components/orders/OrdersPage";
import TestsPage from "./components/tests/TestsPage";
import Layout from "./components/layout/Layout";
import LoginForm from "./components/auth/LoginForm";
import ResetPassword from "./components/auth/ResetPassword";
import PrivateRoute from "./components/auth/PrivateRoute";
import UserManagement from "./components/users/UserManagement";
import SettingsPage from "./components/settings/SettingsPage";


function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout>
                <Home />
              </Layout>
            </PrivateRoute>
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
                <MaterialsPage />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/testes"
          element={
            <PrivateRoute>
              <Layout>
                <TestsPage />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/pedidos"
          element={
            <PrivateRoute>
              <Layout>
                <OrdersPage />
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

        <Route
          path="/configuracoes"
          element={
            <PrivateRoute>
              <Layout>
                <SettingsPage />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
