import React from "react";
import "../../App.css";
import Image from "../../assets/images/me.JPG";

export default function About() {
  return (
    <div class="about-container">
      <img src={Image} width="300" alt="dakshina" />
      <h1>About</h1>
      <p class="about-bio">
      Hey! I am Dakshina Palasamudrum.
      I am a recent graduate from the University of California, Berkeley and 
      studied Economics and Computer Science. My journey building things on the
      internet started a few years ago when I took my first python course, ever 
      since then, I have only continued developing my engineering skills. Other 
      than tech, I am also passionate about fashion, travel, and trying out new 
      places to eat!
      </p>
      <h1>Professional Bio</h1>
      <p class="about-pro-bio">
        My experience as a production engineering fellow with Meta via Major League 
        Hacking, and personal projects have allowed me to actualize my passion for 
        software development and scalability. I applied those skills when my team and 
        I built a portfolio web app with user authentication using Flask, SQL, Linux, 
        and bash scripting to support site reliability infrastructure. I improved my 
        development skills by learning the fundamentals of AWS and Kubernetes, and working 
        in an agile environment alongside Meta mentors and employees. Aside from the fellowship, 
        I have developed and written code for personal projects, such as building a website using 
        React, JavaScript, and CSS, as well as creating a “Celebrity Crush” game, focusing 
        on the backend. During my time at Berkeley, I have also worked as a research intern for the undergraduate 
        research apprentice program, marketing and design intern at Sparklist, consultant at
        Navisens Technology, and interned for the World Financial Group. 
        I learned firsthand how intertwined business and technology are when I
        started my own clothing company in high school where I was able to gain
        valuable skills such as leadership, and design via adobe photoshop and
        web development via Squarespace. My experiences have allowed me to gain strong problem-solving and
        communication skills as well as learning to work in a very fast-paced
        environment.
        
      </p>
    </div>
  );
}
