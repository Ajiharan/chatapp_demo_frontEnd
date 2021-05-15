import React from "react";
import "./ChatContainer.css";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../message/Message";

const ChatContainer = ({
  messages,
  messageHandler,
  setMessage,
  message,
  name,
}) => {
  console.log("Chatcontainer initialize");
  return (
    <div className="chat">
      <div className="chat-container">
        <ScrollToBottom className="message__list">
          {messages?.map((res, i) => (
            <Message name={name} message={res} key={i} />
          ))}
        </ScrollToBottom>
      </div>

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
