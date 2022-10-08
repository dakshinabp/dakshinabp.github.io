import React from "react";
import "../App.css";
import "./MainPage.css";
import Image from "./../assets/images/me.JPG";

function MainPage() {
  return (
    <div class="main-container">
      <img src= {Image} width="250" alt="dakshina" />
      <div class="text-home">
        <h1>HELLO,</h1>
        <p>I'm Dakshina</p>
      </div>
    </div>
  );
}

export default MainPage;
