
import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:6767/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch projects");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="projects-page min-vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center text-white">
          <div className="spinner-border text-info mb-3" role="status"></div>
          <h5>Loading Projects...</h5>
          <p className="text-secondary">Please wait a moment</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-page min-vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h4 className="text-danger">{error}</h4>
        </div>
      </div>
    );
  }

  return (
    <section className="projects-page text-white min-vh-100 py-5">
      <div className="container py-4">

        {/* Heading */}
        <div className="text-center mb-5 project-heading">
          <span className="project-eyebrow">
            <span className="me-2">✦</span> MY WORK
          </span>

          <h1 className="display-4 fw-bold mt-3">
            Featured <span className="project-gradient">Projects.</span>
          </h1>

          <p className="text-secondary fs-5 mt-3">
            Turning ideas into real-world applications
          </p>

          <div className="project-heading-line mx-auto mt-4"></div>
        </div>

        {/* Project Count */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <span className="text-secondary">
            Explore my development work
          </span>

          <span className="project-count">
            {projects.length} Projects
          </span>
        </div>

        {/* Project Cards */}
        <div className="row g-4">

          {projects.map((project, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={project.id}
            >
              <div
                className="card project-card h-100"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="card-body p-4 d-flex flex-column">

                  {/* Category */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <span className="project-arrow">↗</span>
                  </div>

                  {/* Project Details */}
                  <h4 className="fw-bold project-title mb-2">
                    {project.name}
                  </h4>

                  <h6 className="project-tagline mb-3">
                    {project.tagline}
                  </h6>

                  <p className="project-description mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <small className="project-tech-heading">
                      <span className="me-2">⚡</span>
                      TECHNOLOGIES
                    </small>

                    <div className="d-flex flex-wrap gap-2 mt-3">
                      {(project.technologies || "")
                        .split(",")
                        .map((tech) => tech.trim())
                        .filter(Boolean)
                        .map((tech, index) => (
                          <span
                            className="project-tech-chip"
                            key={`${tech}-${index}`}
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="project-footer mt-auto pt-3">
                    <div className="d-flex gap-2 flex-wrap">

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn project-github-btn rounded-pill px-3"
                        >
                          GitHub ↗
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn project-live-btn rounded-pill px-3"
                        >
                          Live Demo ↗
                        </a>
                      )}

                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center project-empty py-5">
            <div className="empty-project-icon mb-3">⌘</div>
            <h5>No projects available.</h5>
            <p className="text-secondary">
              Projects will appear here soon.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;
