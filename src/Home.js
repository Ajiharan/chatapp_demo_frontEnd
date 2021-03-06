import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ChatContainer from "./container/ChatContainer";
import Navbar from "./navbar/Navbar";
import "./App.css";
import TextContainer from "./TextContainer/TextContainer";
let socket = "";
const Home = (props) => {
  console.log("Home container initialize");
  const ENDPOINT = "http://localhost:5000";
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (props?.location?.state) {
      // console.log("search", props.location);
      setRoom(props.location.state.room);
      setName(props.location.state.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.location.state,
    props.location.state.name,
    props.location.state.room,
  ]);

  useEffect(() => {
    socket = io(ENDPOINT, { withCredentials: true });
    if (name !== "" && room !== "") {
      socket.emit("join", { name, room }, () => {});
    }

    return () => {
      if (socket) {
        socket.emit("removeUser");
        socket.off();
      }
    };
  }, [name, room]);
  useEffect(() => {
    socket.on("roomData", ({ users }) => {
      // console.log("users", users);
      setUsers(users);
    });

    socket.on("message", (mes) => {
      // console.log("message coming", mes);
      // console.log("messagessss coming", messages);
      // setMessages([...messages, mes]);
      setMessages((prev) => {
        return [...prev, mes];
      });
    });
  }, [name, room]);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", message, () => {
      setMessage("");
    });
    //console.log(message);
  };

  return (
    <div className="App__container">
      <div className="container m-4">
        <Navbar room={room} />

        <ChatContainer
          messageHandler={sendMessage}
          messages={messages}
          setMessage={setMessage}
          message={message}
          name={name}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Home;
