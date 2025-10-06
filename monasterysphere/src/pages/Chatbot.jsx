import React, { useEffect, useRef, useState } from "react";
import "./Chatbot.css";

const API_URL = "http://localhost:8787/api/chat";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Welcome! Ask me anything." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const msg = input.trim();
    if (!msg || loading) return;

    setMessages((m) => [...m, { sender: "user", text: msg }]);
    setInput("");
    setLoading(true);

    try {
      const resp = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });

      const data = await resp.json();
      const reply =
        data?.reply || data?.error || "⚠️ Error: No response from server.";
      setMessages((m) => [...m, { sender: "bot", text: reply }]);
    } catch (e) {
      console.error(e);
      setMessages((m) => [
        ...m,
        { sender: "bot", text: "⚠️ Error fetching response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <header className="chatbot-header">
        <h2>🏯 MonasterySphere – AI Chatbot</h2>
      </header>

      <div className="chat-window">
        {messages.map((m, i) => (
          <div key={i} className={`chat-message ${m.sender}`}>
            <div className="message-bubble">{m.text}</div>
          </div>
        ))}
        {loading && (
          <div className="chat-message bot">
            <div className="message-bubble typing">⏳ Thinking...</div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <button onClick={sendMessage} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}
