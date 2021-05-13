import React from "react";
import "./Navbar.css";
const Navbar = ({ room }) => {
  return (
    <div className="nav-container">
      <p className="text-light">{room}</p>
    </div>
  );
};

export default Navbar;
