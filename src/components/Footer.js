import React from "react";
// import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="footer-container">
      {/* <section class="footer-subscription"> */}
      {/* <p class="footer-subscription-heading">Join the adventure newsletter</p> */}
      {/* <p class="footer-subscription-text">You can unsubscribe at anytime.</p> */}
      {/* <div class="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              class="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div> */}
      {/* </section> */}
      {/* <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div> */}
      <section class="social-media">
        <div class="social-media-wrap">
          {/* <div class="footer-logo">
            <Link to="/" class="social-logo">
              TRVL <i class="fab fa-typo3"></i>
            </Link>
          </div> */}
          {/* <small class="website-rights">TRVL</small> */}
          <div class="social-icons">
            <a
              class="social-icon-link github"
              href="https://github.com/dakshinabp"
              target="_blank"
              aria-label="GitHub"
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
              // to="/"
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
