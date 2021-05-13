import React from "react";
import "./ChatContainer.css";
const ChatContainer = ({ messages, messageHandler, setMessage, message }) => {
  return (
    <div className="chat">
      <div className="chat-container"></div>
      <form className="text__input" onSubmit={(e) => messageHandler(e)}>
        <input
          type="text"
          className="input-control"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatContainer;
