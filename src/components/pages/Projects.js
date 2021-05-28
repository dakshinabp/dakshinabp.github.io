import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div class="game-container">
      <h1>Find your Celebrity Crush!</h1>
      <Link to="/celebrity-crush-game">Play Game</Link>
    </div>
  );
}
