import React, { useState, useEffect } from "react";
import "../../App.css";

export default function CelebrityCrushGame() {
  const [gender, setGender] = useState("none");
  const handleFemaleClick = () => setGender("female");
  const handleMaleClick = () => setGender("male");

  let chooseGender = (
    <div class="game-container">
      <h1>What is your preference?</h1>
      <button buttonStyle="btn--outline" onClick={handleFemaleClick}>
        Female
      </button>
      <button buttonStyle="btn--outline" onClick={handleMaleClick}>
        Male
      </button>
    </div>
  );

  let chooseCrush = (
    <div class="game-container">
      <h1>Who do you like better?</h1>
    </div>
  );

  if (gender === "none") {
    return chooseGender;
  } else {
    console.log(gender);
    return chooseCrush;
  }
}
