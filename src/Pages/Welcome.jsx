
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="welcome-screen">
      <div className="welcome-glow"></div>

      <div className="welcome-content">
        <div className="welcome-icon">&lt;/&gt;</div>

        <p className="welcome-label">
          WELCOME TO MY DIGITAL WORLD
        </p>

        <h1>
          Hello, I'm <span>Pradip Kannor</span>
        </h1>

        <h3>Java Full Stack Developer</h3>

        <div className="welcome-line"></div>

        <h2 className="welcome-tagline">
          Turning Ideas Into Reality.
        </h2>

        <p className="welcome-description">
          I build modern, scalable and user-focused web applications.
        </p>

        <p className="welcome-message">
          Explore my work. Discover my journey.
          Let's create something amazing.
        </p>

        <div className="welcome-explore">
          Let's Explore <span>→</span>
        </div>

        <div className="welcome-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
