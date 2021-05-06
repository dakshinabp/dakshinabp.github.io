import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div class="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>HELLO</h1>
      <p>Welcome to my Universe</p>
      <div class="hero-btns">
        {/* <Button class="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          RESUME
        </Button> */}
        {/* <Button class="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH TRAILER <i class="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
