import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [messageList, setMessageList] = useState([]);
  const [userInput, setUserInput] = useState("");

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="chat-list" style={{ display: "flex", flexDirection: "column", gap:0}}>
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
        {/* Messages */}
        <div className="messages">
          <div className="message received">Hello 👋</div>
          <div className="message sent">Hi!</div>
          <div className="message received">This is a dark theme chat UI.</div>
        </div>

        {/* Input */}
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
