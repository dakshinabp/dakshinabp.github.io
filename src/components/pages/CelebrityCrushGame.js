import React, { useState } from "react";
import "../../App.css";

export default function CelebrityCrushGame() {
  const [gender, setGender] = useState("none");
  const [women] = useState([
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
  const [men] = useState([
    {
      name: "Henry Golding",
      photo: "https://images.moviefit.me/p/o/89543-henry-golding.jpg",
    },
    {
      name: "Zayn Malik",
      photo:
        "https://vz.cnwimg.com/thumb-400x/wp-content/uploads/2013/08/Zayn-Malik-1.jpg",
    },
    {
      name: "Harry Styles",
      photo:
        "https://m.media-amazon.com/images/M/MV5BMTUxMzU2MTk1OF5BMl5BanBnXkFtZTgwNzg4NjAwMzI@._V1_.jpg",
    },
    {
      name: "Travis Scott",
      photo:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed670179e384f0007b7db8f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1032%26cropX2%3D3642%26cropY1%3D186%26cropY2%3D2795",
    },
    {
      name: "Micheal B Jordan",
      photo:
        "https://m.media-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_.jpg",
    },
    {
      name: "Dev Patel",
      photo: "https://api.time.com/wp-content/uploads/2015/03/dev-patel.jpg",
    },
    {
      name: "Timothee Chalamet",
      photo:
        "https://m.media-amazon.com/images/M/MV5BOWU1Nzg0M2ItYjEzMi00ODliLThkODAtNGEyYzRkZTBmMmEzXkEyXkFqcGdeQXVyNDk2Mzk2NDg@._V1_UY1200_CR138,0,630,1200_AL_.jpg",
    },
    {
      name: "Chris Evans",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Mark_Kassen%2C_Tony_C%C3%A1rdenas_and_Chris_Evans_%28cropped%29.jpg",
    },
    {
      name: "Justin Beiber",
      photo:
        "https://assets.vogue.com/photos/6053ac29a7265f514347db52/2:3/w_2984,h_4477,c_limit/Justin-Bieber-vogue-credit-Mike-Rosenthal-1.jpg",
    },
    {
      name: "Chris Pine",
      photo:
        "https://m.media-amazon.com/images/M/MV5BMTM4OTQ4NTU3NV5BMl5BanBnXkFtZTcwNjEwNDU0OQ@@._V1_.jpg",
    },
  ]);

  const [numTimesLeft, setNumTimesLeft] = useState(5);
  const [pickedPerson, setPickedPerson] = useState({
    name: "None",
  });
  const handleFemaleClick = () => setGender("female");
  const handleMaleClick = () => setGender("male");

  function handlePersonClick(pickedCrush) {
    setPickedPerson(pickedCrush);
    setNumTimesLeft(numTimesLeft - 1);
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

  function getRandomPerson() {
    if (gender === "female") {
      let randIdx = Math.floor(women.length * Math.random());
      let result = women[randIdx];
      women.splice(randIdx, 1);
      return result;
    } else {
      // male
      let randIdx = Math.floor(men.length * Math.random());
      let result = men[randIdx];
      men.splice(randIdx, 1);
      return result;
    }
  }

  let winnerScreen = (
    <div class="game-container">
      <h1>Your celebrity crush is {pickedPerson["name"]}!</h1>
      <img src={pickedPerson["photo"]} width="300" alt="winner" />
    </div>
  );

  if (numTimesLeft === 0) {
    return winnerScreen;
  }

  if (gender === "none") {
    return chooseGender;
  }

  let person1 =
    pickedPerson["name"] === "None" ? getRandomPerson() : pickedPerson;
  let person2 = getRandomPerson();
  let chooseCrush = (
    <div class="game-container">
      <h1>Who do you like better?</h1>
      <div class="photo-row">
        <div class="photo-column">
          <img src={person1["photo"]} width="300" alt="dakshina" />
          <button onClick={() => handlePersonClick(person1)}>
            {person1["name"]}
          </button>
        </div>
        <div class="photo-column">
          <img src={person2["photo"]} width="300" alt="dakshina" />
          <button onClick={() => handlePersonClick(person2)}>
            {person2["name"]}
          </button>
        </div>
      </div>
    </div>
  );
  if (gender === "female") {
    return chooseCrush;
  } else {
    // male
    return chooseCrush;
  }
}
