import React from "react";
import "./Message.css";
const Message = ({ message, name }) => {
  return (
    <div className="message">
      {message?.user === name ? (
        <div className="right__message">
          <p className="right__text">{message?.text}</p>
        </div>
      ) : (
        <div className="left_message">
          <div className="left__text">
            <p>{message?.user}</p>
            <p className="lead">{message?.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
