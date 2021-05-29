import React, { useState, useEffect } from "react";
import "../../App.css";

export default function CelebrityCrushGame() {
  const [gender, setGender] = useState("none");
  const [women, setWomen] = useState([
    {
      name: "Ariana Grande",
      photo:
        "https://s.yimg.com/ny/api/res/1.2/fDxwejrhHXNGKdaJ8LOXgw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTEyMzQuMjE4NzU-/https://s.yimg.com/uu/api/res/1.2/CgO.hr8w.iEUiE8h11p1Ow--~B/aD0yNjMzO3c9MjA0ODthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/popsugar_us/509499353f4d4eb3aee30244f2f21efa",
    },
    {
      name: "Kylie Jenner",
      photo:
        "https://yt3.ggpht.com/ytc/AAUvwniq8QHLDz05IGIjJLqCUeyeyj2H46At5vpcW8142A=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Kendall Jenner",
      photo:
        "https://assets.teenvogue.com/photos/5ebc0700a575717f045cbda5/16:9/w_2947,h_1658,c_limit/GettyImages-1059503174.jpg",
    },
    {
      name: "Beyonce",
      photo:
        "https://pyxis.nymag.com/v1/imgs/929/e92/c17cd81281788bd8b2870ce571f64419aa-beyonce-biden.rsquare.w1200.jpg",
    },
    {
      name: "Deepika Padukone",
      photo:
        "https://d2oeiptl16x8hi.cloudfront.net/deepika_padukone/uploads/homepage/socials/173475899_786525505338675_1983657467330209535_n.jpg",
    },
    {
      name: "Megan Fox",
      photo:
        "https://tvline.com/wp-content/uploads/2018/04/megan-fox-mysteries-and-myths.jpg?w=620",
    },
    {
      name: "Bella Hadid",
      photo:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bella-hadid-1611314419.jpg?crop=1.00xw:0.669xh;0,0.0840xh&resize=640:*",
    },
    {
      name: "Gigi Hadid",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/9/91/Gigi_Hadid._2015.jpg",
    },
    {
      name: "Brenda Song",
      photo:
        "https://m.media-amazon.com/images/M/MV5BZGZiN2YxMDMtNDJiOS00ZWMyLWJhZTYtZjQxMjY5MTk2MGM0XkEyXkFqcGdeQXVyMTg4MDE2NDI@._V1_.jpg",
    },
    {
      name: "Megan Thee Stallion",
      photo:
        "https://cdn.vox-cdn.com/thumbor/YgxgsXB8HqRb49MlUIXyuL1paGg=/0x0:634x395/1200x800/filters:focal(243x73:343x173)/cdn.vox-cdn.com/uploads/chorus_image/image/69171700/Megan_Thee_Stallion.0.0.jpg",
    },
  ]);
  const [numTimesLeft, setNumTimesLeft] = useState(5);
  const [seenPeople, setSeenPeople] = useState(new Set([]));
  const [pickedPerson, setPickedPerson] = useState(getRandomWoman());
  const handleFemaleClick = () => setGender("female");
  const handleMaleClick = () => setGender("male");

  function handleWomenClick(pickedWoman) {
    console.log(pickedWoman);
    setPickedPerson(pickedWoman);
    setNumTimesLeft(numTimesLeft - 1);
  }

  function getRandomWoman() {
    let randIdx = Math.floor(women.length * Math.random());
    let result = women[randIdx];
    women.splice(randIdx, 1);
    console.log(women);
    return result;
  }

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

  let woman1 = pickedPerson;
  let woman2 = getRandomWoman();
  let chooseCrush = (
    <div class="game-container">
      <h1>Who do you like better?</h1>
      <div class="photo-row">
        <div class="photo-column">
          <img src={woman1["photo"]} width="300" alt="dakshina" />
          <button onClick={() => handleWomenClick(woman1)}>
            {woman1["name"]}
          </button>
        </div>
        <div class="photo-column">
          <img src={woman2["photo"]} width="300" alt="dakshina" />
          <button onClick={() => handleWomenClick(woman2)}>
            {woman2["name"]}
          </button>
        </div>
      </div>
    </div>
  );

  let winnerScreen = (
    <div class="game-container">
      <h1>Your celebrity crush is...{pickedPerson["name"]}</h1>
      <img src={pickedPerson["photo"]} width="300" alt="winner" />
    </div>
  );

  if (numTimesLeft === 0) {
    return winnerScreen;
  }

  if (gender === "none") {
    return chooseGender;
  } else if (gender === "female") {
    console.log(gender);
    return chooseCrush;
  } else {
    // male
    return chooseCrush;
  }
}
