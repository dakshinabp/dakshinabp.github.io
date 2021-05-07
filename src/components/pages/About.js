import React from "react";
import "../../App.css";
import Image from "../../assets/images/me.JPG";

export default function About() {
  return (
    <div class="about-container">
      <img src={Image} width="300" alt="dakshina" />
      <h1>About Dakshina</h1>
      <p class="about-bio">
        Hello! My name is Dakshina Palasamudrum and I am a junior at UC Berkeley
        studying Economics and Computer Science. I am originally from Edison,
        New Jersey, and am interested in the intersection between business and
        technology.
      </p>
      <h1>Professional Bio</h1>
      <p class="about-pro-bio">
        I learned firsthand how intertwined business and technology are when I
        started my own clothing company in high school where I was able to gain
        valuable skills such as leadership, and design via adobe photoshop and
        web development via Squarespace. During my time at Berkeley, I have
        worked as a research intern for the undergraduate research apprentice
        program, marketing and design intern at Sparklist, consultant at
        Navisens Technology, and interned for the World Financial Group. My
        experiences have allowed me to gain strong problem-solving and
        communication skills as well as learning to work in a very fast-paced
        environment.
      </p>
    </div>
  );
}
