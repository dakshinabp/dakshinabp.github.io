import React from "react";
import "../App.css";
import "./MainPage.css";

function MainPage() {
  return (
    <div class="main-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>HELLO</h1>
      <p>Welcome to my website!</p>
    </div>
  );
}

export default MainPage;
