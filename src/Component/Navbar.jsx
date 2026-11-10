
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/register", { replace: true });
  };

  // Login nasel tar Navbar hide
  if (!token) {
    return null;
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Learning", path: "/learning" },
    { name: "AI Assistant", path: "/ai-assistant", special: true },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark modern-navbar sticky-top">
      <div className="container">

        {/* Brand */}
        <Link
          className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2"
          to="/admin/dashboard"
        >
          <span className="brand-icon">&lt;/&gt;</span>
          <span>
            Pradip<span className="brand-dot">.</span>
            <small className="brand-dev">dev</small>
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler modern-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-1 mt-3 mt-lg-0">

            {navLinks.map((item) => (
              <Link
                key={item.path}
                className={`nav-link modern-nav-link px-3 ${
                  location.pathname === item.path ? "active" : ""
                } ${item.special ? "ai-nav-link" : ""}`}
                to={item.path}
              >
                {item.special && <span className="ai-sparkle">✦ </span>}
                {item.name}
              </Link>
            ))}

            {/* Logout */}
            <button
              className="btn logout-btn rounded-pill px-4 ms-lg-3 mt-2 mt-lg-0"
              onClick={handleLogout}
            >
              <span className="me-2">↗</span>
              Logout
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
