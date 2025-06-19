import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-header">
        {/* <img src="/logo.png" alt="Logo" className="logo" /> */}

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Samples</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
