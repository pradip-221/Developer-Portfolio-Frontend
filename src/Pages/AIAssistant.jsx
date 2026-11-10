
import React, { useState } from "react";
import { askAI } from "../Servicess/api";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I'm Pradip's AI Assistant. Ask me anything about his skills, projects or experience.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();

    if (!question.trim() || loading) return;

    const userQuestion = question.trim();

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userQuestion },
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const data = await askAI(userQuestion);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.answer },
      ]);
    } catch (error) {
      console.error("AI Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry! Unable to connect with AI. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="ai-page">
      <div className="container py-4">

        {/* Compact Header */}
        <div className="ai-heading text-center mb-4">
          <span className="ai-powered">
            ✦ Powered by Groq AI
          </span>

          <h2 className="mt-3">
            Pradip's <span>AI Assistant</span>
          </h2>

          <p>
            Ask about my skills, projects and experience.
          </p>
        </div>

        {/* Chat Box */}
        <div className="ai-chat-box mx-auto">

          {/* Chat Header */}
          <div className="ai-chat-header">
            <div className="ai-avatar">✦</div>

            <div>
              <h6 className="mb-1">Pradip AI</h6>
              <small>
                <span className="ai-online-dot"></span>
                Online
              </small>
            </div>

            <span className="ai-chat-tag ms-auto">
              GROQ AI
            </span>
          </div>

          {/* Messages */}
          <div className="ai-messages">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`ai-message-row ${
                  msg.role === "user" ? "user-row" : "assistant-row"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="ai-message-avatar">✦</div>
                )}

                <div
                  className={`ai-message ${
                    msg.role === "user"
                      ? "user-message"
                      : "assistant-message"
                  }`}
                >
                  <small>
                    {msg.role === "user" ? "You" : "Pradip AI"}
                  </small>

                  <div className="ai-message-text">
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}

            {/* Loading */}
            {loading && (
              <div className="ai-message-row assistant-row">
                <div className="ai-message-avatar">✦</div>

                <div className="ai-thinking">
                  <span className="spinner-border spinner-border-sm text-info"></span>
                  AI is thinking...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="ai-input-area">
            <form onSubmit={handleSend}>
              <div className="ai-input-group">
                <input
                  type="text"
                  placeholder="Ask something about Pradip..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  disabled={loading}
                />

                <button
                  type="submit"
                  disabled={loading || !question.trim()}
                >
                  {loading ? (
                    <span className="spinner-border spinner-border-sm"></span>
                  ) : (
                    <>Send <span>➤</span></>
                  )}
                </button>
              </div>
            </form>

            <small className="ai-input-note">
              AI responses powered by Groq
            </small>
          </div>
        </div>

        {/* Suggested Questions */}
        <div className="ai-suggestions text-center mt-4">
          <small>TRY ASKING</small>

          <div className="d-flex flex-wrap justify-content-center gap-2 mt-2">
            <button
              onClick={() => setQuestion("Tell me about Pradip's projects")}
            >
              🚀 Projects
            </button>

            <button
              onClick={() => setQuestion("What technologies does Pradip know?")}
            >
              💻 Skills
            </button>

            <button
              onClick={() => setQuestion("Tell me about Pradip's experience")}
            >
              👨‍💻 Experience
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AIAssistant;
