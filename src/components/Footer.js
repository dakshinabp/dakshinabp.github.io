import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div class="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="social-icons">
            <a
              class="social-icon-link github"
              href="https://github.com/dakshinabp"
              target="_blank"
              aria-label="GitHub"
              rel="noreferrer"
            >
              <i class="fab fa-github" />
            </a>
            <a
              class="social-icon-link email"
              href="mailto:dakshinabp@berkeley.edu"
              target="_blank"
              aria-label="Email"
              rel="noreferrer"
            >
              <i class="far fa-envelope"></i>
            </a>
            <a
              class="social-icon-link linkedin"
              href="https://www.linkedin.com/in/dakshinapalasamudrum/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
