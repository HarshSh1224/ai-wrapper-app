import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [messageList, setMessageList] = useState([]);
  const [userInput, setUserInput] = useState("");

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <div
          className="chat-list"
          style={{ display: "flex", flexDirection: "column", gap: 0 }}
        >
          <h2>ChatGPT Wrapper</h2>
          <p>Hey How Are you 1</p>
          <p>Hey How Are you 2</p>
          <p>Hey How Are you 3</p>
          <p></p>
          <button>Create New</button>
        </div>
      </div>
      {/* Main Chat Area */}
      <div className="chat">
        <div className="messages">
          {messageList.map((message) => {
            return (
              <div
                className={
                  message.sentBy === "ai" ? "message received" : "message sent"
                }
              >
                {message.content}
              </div>
            );
          })}
        </div>

        {/* Input */}
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            onClick={async () => {
              const newItem = { content: userInput, sentBy: "user" };
              setMessageList((prev) => [...prev, newItem]);
              setUserInput("");

              // SEND TO BACKEND FOR RESPONSE

              const response = await fetch("http://localhost:5500/chat", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  message: userInput,
                }),
              });

              const status = response.status;
              const json = await response.json();

              const backendResponse = json.responseMessage;
              const aiResponse = { content: backendResponse, sentBy: "ai" };
              setMessageList((prev) => [...prev, aiResponse]);
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
