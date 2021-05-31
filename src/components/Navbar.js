import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

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
                href="https://drive.google.com/file/d/1IOt8FbX2vtilmqJ49JDUjOMhk0JIgCAR/view?usp=sharing"
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
