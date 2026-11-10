
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfile } from "../Servicess/api";

function Home() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProfile(1)
      .then((data) => setProfile(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="home-state">
        <div className="text-center">
          <div className="spinner-border text-info mb-3" />
          <p>Preparing my portfolio...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="home-state">
        <p className="text-danger">Error: {error}</p>
      </section>
    );
  }

  if (!profile) {
    return (
      <section className="home-state">
        <p>Profile not found.</p>
      </section>
    );
  }

  return (
    <section className="home-unique">
      <div className="home-grid-bg"></div>
      <div className="home-glow home-glow-one"></div>
      <div className="home-glow home-glow-two"></div>

      <div className="container home-container">
        <div className="row align-items-center g-5">

          {/* LEFT: DEVELOPER INTRODUCTION */}
          <div className="col-lg-7 home-content">

            <div className="home-availability">
              <span className="home-live-dot"></span>
              OPEN TO OPPORTUNITIES
              <span className="home-availability-arrow">↗</span>
            </div>

            <p className="home-intro-label">
              HELLO, WORLD! <span>👋</span>
              <span className="home-intro-line"></span>
            </p>

            <h1 className="home-main-name">
              I'm <span>{profile.fullName}</span>
              <span className="home-name-dot">.</span>
            </h1>

            <div className="home-role-wrapper">
              <span className="home-role-line"></span>
              <h2>{profile.title}</h2>
            </div>

            <p className="home-description">
              {profile.introduction}
            </p>

            {/* TECHNOLOGY BADGES */}
            <div className="home-tech-section">
              <span className="home-tech-label">MY TECH TOOLKIT</span>

              <div className="home-tech-list">
                {[
                  { name: "Java", icon: "☕" },
                  { name: "Spring Boot", icon: "🍃" },
                  { name: "React", icon: "⚛" },
                  { name: "MySQL", icon: "◈" },
                  { name: "REST API", icon: "⌘" },
                ].map((tech) => (
                  <span className="home-tech-item" key={tech.name}>
                    <span>{tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="home-actions">
              <Link to="/projects" className="home-primary-btn">
                Explore My Work <span>↗</span>
              </Link>

              <Link to="/contact" className="home-secondary-btn">
                Let's Connect <span>→</span>
              </Link>

              <a
                href="/Pradip_Kannor_Resume23.pdf"
                download
                className="home-resume-btn"
              >
                ↓ Resume
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="home-social-section">
              <span className="home-social-label">FIND ME ON</span>

              <a
                href={profile.githuburl}
                target="_blank"
                rel="noreferrer"
                className="home-social-link"
              >
                GitHub ↗
              </a>

              <span className="home-social-divider">/</span>

              <a
                href={
                  profile.linkdinurl ||
                  "https://www.linkedin.com/in/pradip-kannor-6b9aba364/"
                }
                target="_blank"
                rel="noreferrer"
                className="home-social-link"
              >
                LinkedIn ↗
              </a>

              <span className="home-location">
                <span>⌖</span> {profile.location}
              </span>
            </div>
          </div>

          {/* RIGHT: PROFILE PHOTO AND DEVELOPER CODE */}
          <div className="col-lg-5 home-visual-column">
            <div className="home-visual">

              {/* ANIMATED ORBIT */}
              <div className="home-photo-orbit home-orbit-one"></div>
              <div className="home-photo-orbit home-orbit-two"></div>

              <div className="home-photo-glow"></div>

              {/* PROFILE PHOTO */}
              <div className="home-photo-frame">
                <img
                  src="/profile.jpeg"
                  alt={`${profile.fullName} - Java Full Stack Developer`}
                  className="home-profile-photo"
                />
              </div>

              <div className="home-photo-number">
                01 / DEVELOPER
              </div>

            </div>

            {/* DEVELOPER CODE BELOW PHOTO */}
            <div className="home-code-card">
              <div className="home-code-header">
                <span className="home-code-dot"></span>
                <span className="home-code-dot"></span>
                <span className="home-code-dot"></span>
                <small>developer.js</small>
              </div>

              <p>
                <span>const</span> Developer = {"{"}
              </p>

              <p className="home-code-indent">
                name: <span>"Pradip Kannor"</span>,
              </p>

              <p className="home-code-indent">
                role: <span>"Full Stack Developer"</span>
              </p>

              <p>{"}"}</p>
            </div>

            <div className="home-visual-caption">
              <span className="home-caption-line"></span>
              BUILDING IDEAS INTO REALITY
            </div>
          </div>

        </div>

        <div className="home-bottom-note">
          <span>SCROLL TO EXPLORE</span>
          <span className="home-scroll-arrow">↓</span>
          <span className="home-bottom-line"></span>
        </div>
      </div>
    </section>
  );
}

export default Home;
