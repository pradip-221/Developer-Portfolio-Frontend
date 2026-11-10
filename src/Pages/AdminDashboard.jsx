import { Link } from "react-router-dom";

function AdminDashboard() {
  const sections = [
    {
      title: "Manage Profile",
      description: "Update your personal and portfolio information.",
      path: "/profile",
      color: "primary",
      icon: "👤",
    },
    {
      title: "Manage Skills",
      description: "Add, update and delete your technical skills.",
      path: "/skills",
      color: "success",
      icon: "💻",
    },
    {
      title: "Manage Projects",
      description: "Manage your completed projects.",
      path: "/projects",
      color: "info",
      icon: "🚀",
    },
    {
      title: "Manage Learning",
      description: "Manage your learning and ongoing projects.",
      path: "/learning",
      color: "warning",
      icon: "📚",
    },
    {
      title: "View Contacts",
      description: "View messages received from visitors.",
      path: "/contact",
      color: "danger",
      icon: "✉️",
    },
    {
      title: "AI Assistant",
      description: "Ask questions about your portfolio using AI.",
      path: "/ai-assistant",
      color: "dark",
      icon: "✦",
    },
  ];

  return (
    <section className="bg-dark text-white min-vh-100 py-5">
      <div className="container py-4">

        {/* Dashboard Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-3">

          <div>
            <span className="text-primary fw-semibold text-uppercase">
              Admin Control Center
            </span>

            <h1 className="display-5 fw-bold mt-2">
              Welcome to <span className="text-primary">Dashboard</span>
            </h1>

            <p className="text-secondary fs-5 mb-0">
              Manage and customize your developer portfolio from one place.
            </p>
          </div>

          <div>
            <span className="badge bg-success bg-opacity-25 text-success border border-success rounded-pill px-3 py-2">
              ● Dashboard Active
            </span>
          </div>

        </div>

        {/* Dashboard Cards */}
        <div className="row g-4">

          {sections.map((section) => (
            <div className="col-sm-6 col-lg-4" key={section.path}>

              <div className="card bg-black text-white border border-secondary rounded-4 h-100 shadow">

                <div className="card-body p-4 d-flex flex-column">

                  {/* Icon */}
                  <div
                    className={`bg-${section.color} bg-opacity-25 rounded-4 d-flex align-items-center justify-content-center mb-4`}
                    style={{ width: "60px", height: "60px" }}
                  >
                    <span className="fs-2">{section.icon}</span>
                  </div>

                  {/* Content */}
                  <h4 className="fw-bold mb-3">
                    {section.title}
                  </h4>

                  <p className="text-secondary lh-lg flex-grow-1">
                    {section.description}
                  </p>

                  {/* Action */}
                  <Link
                    to={section.path}
                    className={`btn btn-${section.color} w-100 rounded-3 fw-semibold py-2`}
                  >
                    Open Section <span className="ms-2">→</span>
                  </Link>

                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Footer Note */}
        <div className="text-center mt-5 pt-4 border-top border-secondary">
          <p className="text-secondary mb-0">
            Manage your portfolio. Showcase your skills. Build your future.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AdminDashboard;