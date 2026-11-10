
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { adminLogin } from "../Servicess/api";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Please enter username and password");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // Login API and JWT token storage
      await adminLogin(username.trim(), password);

      // Update Navbar immediately
      window.dispatchEvent(new Event("auth-changed"));

      // Open Welcome animation
      navigate("/welcome", { replace: true });

    } catch (err) {
      setError(err.message || "Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-bg-grid"></div>
      <div className="auth-orb auth-orb-one"></div>
      <div className="auth-orb auth-orb-two"></div>
      <div className="auth-orb auth-orb-three"></div>

      <div className="container auth-container">
        <div className="row justify-content-center align-items-center">

          <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">

            <div className="auth-card">

              {/* Brand */}
              <div className="auth-brand">
                <div className="auth-logo">
                  {"</>"}
                </div>

                <div className="auth-brand-name">
                  PRADIP<span>.DEV</span>
                </div>

                <div className="auth-brand-line"></div>
              </div>

              {/* Heading */}
              <div className="auth-heading">
                <span className="auth-eyebrow">
                  WELCOME BACK
                </span>

                <h2>
                  Sign <span>In.</span>
                </h2>

                <p>
                  Login to explore my developer portfolio.
                </p>
              </div>

              {/* Error */}
              {error && (
                <div className="auth-alert auth-error" role="alert">
                  <span>!</span>
                  {error}
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleLogin}>

                <div className="auth-field">
                  <label htmlFor="login-username">
                    USERNAME
                  </label>

                  <div className="auth-input-wrapper">
                    <span className="auth-input-icon">♙</span>

                    <input
                      id="login-username"
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      disabled={loading}
                      autoComplete="username"
                    />
                  </div>
                </div>

                <div className="auth-field">
                  <label htmlFor="login-password">
                    PASSWORD
                  </label>

                  <div className="auth-input-wrapper">
                    <span className="auth-input-icon">♧</span>

                    <input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={loading}
                      autoComplete="current-password"
                    />

                    <button
                      type="button"
                      className="auth-password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={loading}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="auth-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Signing In...
                    </>
                  ) : (
                    <>
                      Sign In
                      <span>→</span>
                    </>
                  )}
                </button>

              </form>

              {/* Register Link */}
              <div className="auth-divider">
                <span>NEW TO THE PORTFOLIO?</span>
              </div>

              <div className="auth-switch">
                Don't have an account?

                <Link to="/admin/register">
                  Create Account <span>↗</span>
                </Link>
              </div>

              {/* Footer */}
              <div className="auth-footer">
                <div className="auth-footer-line"></div>

                <p>
                  BUILT WITH PASSION BY
                  <strong> PRADIP KANNOR</strong>
                </p>

                <span>AI POWERED DEVELOPER PORTFOLIO</span>
              </div>

            </div>

            <div className="auth-bottom-note">
              <span className="auth-bottom-dot"></span>
              WELCOME TO MY DIGITAL WORLD
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default AdminLogin;
