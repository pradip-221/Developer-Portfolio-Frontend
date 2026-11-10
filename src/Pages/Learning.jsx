
import { useEffect, useState } from "react";

function Learning() {
  const [learning, setLearning] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:6767/learning")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch learning data");
        }
        return response.json();
      })
      .then((data) => {
        setLearning(data);
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
      <div className="learning-state">
        <div className="text-center text-white">
          <div className="spinner-border text-info mb-3" role="status"></div>
          <h5>Loading Learning Journey...</h5>
          <p className="text-secondary">Preparing your growth timeline</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="learning-state">
        <div className="text-center">
          <div className="learning-state-icon">!</div>
          <h4 className="text-danger">{error}</h4>
        </div>
      </div>
    );
  }

  return (
    <section className="learning-page">
      <div className="container py-5">

        {/* Section Heading */}
        <div className="text-center learning-header mb-5">
          <span className="learning-eyebrow">
            <span className="learning-eyebrow-dot"></span>
            GROWTH & DEVELOPMENT
          </span>

          <h1 className="learning-title mt-3">
            My Learning <span>Journey.</span>
          </h1>

          <p className="learning-subtitle mt-3">
            Technologies and concepts I am continuously exploring
            to become a better developer.
          </p>

          <div className="learning-heading-line mx-auto mt-4"></div>

          <div className="learning-total mt-4">
            <span className="learning-total-number">{learning.length}</span>
            <span className="text-secondary"> Learning Topics</span>
          </div>
        </div>

        {/* Learning Cards */}
        {learning.length > 0 && (
          <div className="row g-4 learning-grid">
            {learning.map((item, index) => (
              <div
                className="col-md-6 col-lg-4"
                key={item.id}
              >
                <div className="learning-card h-100">

                  <div className="learning-card-top">
                    <div className="learning-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <span className="learning-category">
                      {item.category}
                    </span>
                  </div>

                  <div className="learning-icon mt-4">
                    ✦
                  </div>

                  <h4 className="learning-topic mt-3">
                    {item.topic}
                  </h4>

                  <p className="learning-description">
                    {item.description}
                  </p>

                  <div className="learning-status-section">
                    <span className="learning-label">
                      LEARNING STATUS
                    </span>

                    <span className="learning-status">
                      <span className="learning-status-dot"></span>
                      {item.status}
                    </span>
                  </div>

                  <div className="learning-related">
                    <span className="learning-label">
                      RELATED PROJECT
                    </span>

                    <div className="learning-project-name">
                      <span>↗</span>
                      {item.relatedProject || "Self Learning"}
                    </div>
                  </div>

                  <div className="learning-card-bottom"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {learning.length === 0 && (
          <div className="learning-empty text-center">
            <div className="learning-empty-icon">✦</div>
            <h4>No learning topics available.</h4>
            <p>New learning updates will appear here.</p>
          </div>
        )}

        <div className="learning-footer text-center mt-5">
          <span>LEARN</span>
          <span className="learning-footer-dot"> • </span>
          <span>BUILD</span>
          <span className="learning-footer-dot"> • </span>
          <span>IMPROVE</span>
        </div>

      </div>
    </section>
  );
}

export default Learning;
