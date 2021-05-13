import React, { useState } from "react";
import "./login.css";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, room });
    history.push({
      pathname: "/home",
      state: { room, name },
    });
    setName("");
    setRoom("");
  };
  return (
    <div className="container">
      <Form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="name">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </Form.Group>
        <Form.Group controlId="room">
          <Form.Label>Room</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Room"
            onChange={(e) => setRoom(e.target.value)}
            value={room}
            required
          />
        </Form.Group>
        <Button className="btn btn-danger mt-4" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
