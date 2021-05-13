import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ChatContainer from "./container/ChatContainer";
import Navbar from "./navbar/Navbar";
import "./App.css";
let socket = "";
const Home = (props) => {
  const ENDPOINT = "http://localhost:5000";
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  useEffect(() => {
    if (props?.location?.state) {
      console.log("search", props.location.state);
      setRoom(props.location.state.room);
      setName(props.location.name);
      socket = io(ENDPOINT, { withCredentials: true });

      socket.emit("join", { name, room }, () => {});
      return () => {
        socket.emit("disconnect");
        socket.off();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.location.name,
    props.location.state,
    props.location.state.name,
    props.location.state.room,
  ]);

  return (
    <div className="container m-4">
      <Navbar room={room} />
      <ChatContainer />
    </div>
  );
};

export default Home;
