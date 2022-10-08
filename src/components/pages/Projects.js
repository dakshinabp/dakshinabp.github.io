import React from "react";
import "../../App.css";
// import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div class="game-container">
      <div class="card">
        <div class="text">
          <h1>Find your Celebrity Crush!</h1>
          {/* <Link to="/celebrity-crush-game">Play Game</Link> */}
          <a href="/celebrity-crush-game" style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>Play Game</a>
        </div>
        

      </div>
    </div>
  );
}
