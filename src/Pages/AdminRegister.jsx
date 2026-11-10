
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { adminRegister } from "../Servicess/api";

function AdminRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Please enter username and password");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await adminRegister(username.trim(), password);

      setSuccess("Account created successfully! Redirecting...");

      setTimeout(() => {
        navigate("/admin/login", { replace: true });
      }, 1500);

    } catch (err) {
      setError(err.message || "Registration failed");
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

              <div className="auth-brand">
                <div className="auth-logo">
                  {"</>"}
                </div>

                <div className="auth-brand-name">
                  PRADIP<span>.DEV</span>
                </div>

                <div className="auth-brand-line"></div>
              </div>

              <div className="auth-heading">
                <span className="auth-eyebrow">
                  JOIN THE COMMUNITY
                </span>

                <h2>
                  Create Your <span>Account.</span>
                </h2>

                <p>
                  Start exploring my developer portfolio.
                </p>
              </div>

              {error && (
                <div className="auth-alert auth-error" role="alert">
                  <span>!</span>
                  {error}
                </div>
              )}

              {success && (
                <div className="auth-alert auth-success" role="alert">
                  <span>✓</span>
                  {success}
                </div>
              )}

              <form onSubmit={handleRegister}>

                <div className="auth-field">
                  <label htmlFor="register-username">
                    USERNAME
                  </label>

                  <div className="auth-input-wrapper">
                    <span className="auth-input-icon">♙</span>

                    <input
                      id="register-username"
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
                  <label htmlFor="register-password">
                    PASSWORD
                  </label>

                  <div className="auth-input-wrapper">
                    <span className="auth-input-icon">♧</span>

                    <input
                      id="register-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={loading}
                      autoComplete="new-password"
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
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <span>→</span>
                    </>
                  )}
                </button>

              </form>

              <div className="auth-divider">
                <span>ALREADY A MEMBER?</span>
              </div>

              <div className="auth-switch">
                Have an account already?

                <Link to="/admin/login">
                  Sign In <span>↗</span>
                </Link>
              </div>

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
              YOUR JOURNEY STARTS HERE
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default AdminRegister;
