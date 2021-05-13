import React from "react";
import "./Message.css";
const Message = ({ message, name }) => {
  console.log("message", message);
  return (
    <div className="message">
      {message?.name === name ? (
        <div className="right__message">
          <p className="lead">{message?.text}</p>
        </div>
      ) : (
        <div className="left_message">
          <p>{message?.name}</p>
          <p className="lead">{message?.text}</p>
        </div>
      )}
    </div>
  );
};

export default Message;
