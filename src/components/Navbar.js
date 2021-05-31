import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav class="navbar">
        <div class="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Dakshina Palasamudrum
          </Link>
          <div class="menu-icon" onClick={handleClick}>
            <i class={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul class={click ? "nav-menu active" : "nav-menu"}>
            <li class="nav-item">
              <Link to="/" class="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li class="nav-item">
              <a
                class="nav-links"
                href="https://drive.google.com/file/d/10e60flKABe-TXX9RFWOrXRfMu_L17mjW/view?usp=sharing"
                target="_blank"
                onClick={closeMobileMenu}
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
            <li class="nav-item">
              <Link to="/projects" class="nav-links" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
