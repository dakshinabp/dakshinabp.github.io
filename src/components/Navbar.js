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
            dakshina palasamudrum
          </Link>
          <div class="menu-icon" onClick={handleClick}>
            <i class={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul class={click ? "nav-menu active" : "nav-menu"}>
            <li class="nav-item">
              <Link to="/" class="nav-links" onClick={closeMobileMenu}>
                home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-links" onClick={closeMobileMenu}>
                about
              </Link>
            </li>
            <li class="nav-item">
              <a
                class="nav-links"
                href="https://drive.google.com/file/d/1CZbNaqukLFei54M6c86-xC39FnnjgySJ/view?usp=sharing"
                target="_blank"
                onClick={closeMobileMenu}
                rel="noreferrer"
              >
                resume
              </a>
            </li>
            <li class="nav-item">
              <Link to="/projects" class="nav-links" onClick={closeMobileMenu}>
                projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
