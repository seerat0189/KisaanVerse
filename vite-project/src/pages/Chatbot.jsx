import React, { useState } from "react";
import axios from "axios";
import "../styles/Chatbot.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);

    try {
      const response = await axios.post("http://localhost:5000/chatbot", {
        message: input,
      });

      setMessages([...newMessages, { text: response.data.reply, sender: "bot" }]);
    } catch (error) {
      console.error("Error sending message", error);
    }

    setInput("");
  };

  return (
    <>
    <Header />
    <div className="chat-container">
      <h2>Krishi Crop Planner</h2>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Ask about crop planning..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Chatbot;
