import React from "react";
import "../../App.css";
import Image from "../../assets/images/mlh.png";
import Image2 from "../../assets/images/sparklist.webp";
import Image3 from "../../assets/images/palas.jpg";

export default function About() {
  return (
    <div class="about-container">
      <div class ="card">
        <img class="card-img" src= {Image} width="200" alt="mlh logo" />
        <div class="text">
          <h1>Meta (Major League Hacking Fellowship)</h1>
          <p class="role">Production Engineering Fellow</p>
          <p class="term">Summer 2021</p>
        </div>
      </div>
    
      <div class ="card">
        <img class="card-img" src= {Image2} width="50" height="300" alt="sparklist logo" />
        <div class="text">
          <h1>Sparklist</h1>
          <p class="role">Design and Marketing Intern</p>
          <p class="term">Feb. 2020 – May 2020</p>
        </div>
      </div>

      <div class ="card">
        <img class="card-img" src= {Image3} width="50" alt="palas logo" />
        <div class="text">
          <h1>Palas Designs</h1>
          <p class="role">CEO and Founder</p>
          <p class="term">Nov. 2016 – Sep. 2018</p>
        </div>
      </div>

      
      
    </div>
  );
}
