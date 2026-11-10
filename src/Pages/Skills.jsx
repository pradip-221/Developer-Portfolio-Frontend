
import { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:6767/skills")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch skills");
        }
        return response.json();
      })
      .then((data) => {
        setSkills(data);
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
      <div className="skills-page min-vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center text-white">
          <div className="spinner-border text-info mb-3" role="status"></div>
          <h5>Loading Skills...</h5>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="skills-page min-vh-100 d-flex justify-content-center align-items-center">
        <h4 className="text-danger">{error}</h4>
      </div>
    );
  }

  return (
    <section className="skills-page text-white min-vh-100 py-5">
      <div className="container py-4">

        {/* Heading */}
        <div className="text-center mb-5 skills-heading">
          <span className="skills-eyebrow">
            ✦ MY EXPERTISE
          </span>

          <h1 className="display-4 fw-bold mt-3">
            Technical <span className="skills-gradient">Skills.</span>
          </h1>

          <p className="text-secondary fs-5 mt-3">
            Technologies and tools I use to build applications
          </p>

          <div className="skills-heading-line mx-auto mt-4"></div>
        </div>

        {/* Skills Count */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <span className="text-secondary">
            My technical toolkit
          </span>

          <span className="skills-count">
            {skills.length} Skills
          </span>
        </div>

        {/* Skills Cards */}
        <div className="row g-4">

          {skills.map((skill, index) => (
            <div
              className="col-sm-6 col-lg-4"
              key={skill.id}
            >
              <div
                className="card skill-card h-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-body p-4">

                  {/* Card Header */}
                  <div className="d-flex justify-content-between align-items-start mb-4">

                    <div>
                      <span className="skill-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h5 className="fw-bold mt-2 mb-2 skill-title">
                        {skill.name}
                      </h5>

                      <span className="skill-category">
                        {skill.category}
                      </span>
                    </div>

                    <div className="skill-icon">
                      ✦
                    </div>

                  </div>

                  {/* Description */}
                  <p className="skill-description mb-4">
                    {skill.description}
                  </p>

                  {/* Proficiency */}
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <small className="text-secondary">
                      Proficiency
                    </small>

                    <small className="skill-percentage">
                      {skill.proficiencyLevel}%
                    </small>
                  </div>

                  <div className="progress skill-progress">
                    <div
                      className="progress-bar skill-progress-bar"
                      role="progressbar"
                      aria-valuenow={skill.proficiencyLevel}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        "--skill-width": `${skill.proficiencyLevel}%`,
                        animationDelay: `${index * 0.1 + 0.3}s`
                      }}
                    />
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Empty State */}
        {skills.length === 0 && (
          <div className="text-center skills-empty py-5">
            <div className="mb-3 fs-1 text-info">✦</div>
            <h5>No skills added yet.</h5>
            <p className="text-secondary">
              Skills will appear here soon.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Skills;
