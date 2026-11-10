
import { useState } from "react";
import { saveContact } from "../Servicess/api";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await saveContact(contact);
      setMessage("Message sent successfully!");
      setContact({ name: "", email: "", subject: "" });
    } catch (error) {
      setMessage("Unable to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page container py-5">
      <div className="contact-heading text-center mb-5">
        <span className="contact-eyebrow">
          <span className="contact-eyebrow-dot"></span>
          GET IN TOUCH
        </span>

        <h1 className="contact-title">
          Let's <span className="contact-gradient">Connect.</span>
        </h1>

        <p className="contact-subtitle">
          Have a project idea or an opportunity? I'd love to hear from you.
        </p>
        <div className="contact-heading-line"></div>
      </div>

      <div className="row g-4 contact-layout">
        {/* Contact Information */}
        <div className="col-lg-5">
          <div className="contact-info-card h-100">
            <span className="contact-card-label">CONTACT INFORMATION</span>

            <h3 className="contact-info-title">
              Let's start a conversation.
            </h3>

            <p className="contact-info-description">
              I'm always open to discussing new projects, creative ideas,
              and opportunities to be part of your vision.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">✉</div>
                <div>
                  <span className="contact-info-label">EMAIL</span>
                  <p className="contact-info-value">
                    Get in touch through the form
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/pradip-221"
                target="_blank"
                rel="noreferrer"
                className="contact-info-item contact-info-link"
              >
                <div className="contact-info-icon">⌘</div>
                <div>
                  <span className="contact-info-label">GITHUB</span>
                  <p className="contact-info-value">github.com/pradip-221</p>
                </div>
                <span className="contact-external">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/pradip-kannor-6b9aba364/"
                target="_blank"
                rel="noreferrer"
                className="contact-info-item contact-info-link"
              >
                <div className="contact-info-icon">in</div>
                <div>
                  <span className="contact-info-label">LINKEDIN</span>
                  <p className="contact-info-value">Connect professionally</p>
                </div>
                <span className="contact-external">↗</span>
              </a>
            </div>

            <div className="contact-availability">
              <span className="contact-availability-dot"></span>
              Open to opportunities
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span className="contact-card-label">SEND A MESSAGE</span>
              <h3>Write to me</h3>
              <p>Fill in the details below and I'll get back to you.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="contact-form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control contact-form-control"
                    placeholder="Enter your name"
                    value={contact.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="contact-form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control contact-form-control"
                    placeholder="Enter your email"
                    value={contact.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="contact-form-label">Your Message</label>
                  <textarea
                    name="subject"
                    className="form-control contact-form-control contact-textarea"
                    placeholder="Tell me about your project or opportunity..."
                    rows="5"
                    value={contact.subject}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Sending...
                      </>
                    ) : (
                      <>Send Message <span>↗</span></>
                    )}
                  </button>
                </div>
              </div>
            </form>

            {message && (
              <div
                className={`contact-feedback ${
                  message.includes("successfully")
                    ? "contact-success"
                    : "contact-error"
                }`}
              >
                <span>{message.includes("successfully") ? "✓" : "!"}</span>
                {message}
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="contact-footer">
        Designed & built with <span>♥</span> by Pradip Kannor
      </p>
    </div>
  );
}

export default Contact;
