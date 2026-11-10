
import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import "./App.css";

import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import AIAssistant from "./Pages/AIAssistant";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Learning from "./Pages/Learning";

import Navbar from "./Component/Navbar";
import AdminLogin from "./Pages/AdminLogin";
import AdminRegister from "./Pages/AdminRegister";
import Welcome from "./Pages/Welcome";

function ProtectedRoute({ children, token }) {
  return token ? children : <Navigate to="/admin/login" replace />;
}

function App() {
  const [token, setToken] = useState(() =>
    localStorage.getItem("token")
  );

  const location = useLocation();

  useEffect(() => {
    const updateAuth = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("auth-changed", updateAuth);
    window.addEventListener("storage", updateAuth);

    return () => {
      window.removeEventListener("auth-changed", updateAuth);
      window.removeEventListener("storage", updateAuth);
    };
  }, []);

  // Welcome page var Navbar display honar nahi
  const showNavbar =
    token && location.pathname !== "/welcome";

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        {/* Default Route */}
        <Route
          path="/"
          element={
            <Navigate
              to={token ? "/home" : "/admin/register"}
              replace
            />
          }
        />

        {/* Register */}
        <Route
          path="/admin/register"
          element={
            token ? (
              <Navigate to="/home" replace />
            ) : (
              <AdminRegister />
            )
          }
        />

        {/* Login */}
        <Route
          path="/admin/login"
          element={
            token ? (
              <Navigate to="/welcome" replace />
            ) : (
              <AdminLogin />
            )
          }
        />

        {/* Welcome Animation */}
        <Route
          path="/welcome"
          element={
            <ProtectedRoute token={token}>
              <Welcome />
            </ProtectedRoute>
          }
        />

        {/* Home */}
        <Route
          path="/home"
          element={
            <ProtectedRoute token={token}>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute token={token}>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Skills */}
        <Route
          path="/skills"
          element={
            <ProtectedRoute token={token}>
              <Skills />
            </ProtectedRoute>
          }
        />

        {/* Projects */}
        <Route
          path="/projects"
          element={
            <ProtectedRoute token={token}>
              <Projects />
            </ProtectedRoute>
          }
        />

        {/* Learning */}
        <Route
          path="/learning"
          element={
            <ProtectedRoute token={token}>
              <Learning />
            </ProtectedRoute>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <ProtectedRoute token={token}>
              <Contact />
            </ProtectedRoute>
          }
        />

        {/* AI Assistant */}
        <Route
          path="/ai-assistant"
          element={
            <ProtectedRoute token={token}>
              <AIAssistant />
            </ProtectedRoute>
          }
        />

        {/* Unknown Route */}
        <Route
          path="*"
          element={
            <Navigate
              to={token ? "/home" : "/admin/register"}
              replace
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
