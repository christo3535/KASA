import React from "react";
import "./rating.css";
import StarsRed from "../../images/starsPink.svg";
import StarsWhite from "../../images/starsWhite.svg";


const Raiting = ({ rating }) => {
  const starsRating = [];
  const calculateRest = 5 - rating;

  for (let a = 0; a < rating; a++) {
    starsRating.push(
      <img key={`red-${a}`} className="stars" src={StarsRed} alt="red stars" />
    );
  }

  for (let b = 0; b < calculateRest; b++) {
    starsRating.push(
      <img
        key={`gray-${b}`}
        className="stars"
        src={StarsWhite}
        alt="white stars"
      />
    );
  }

  return (
    <div>
      <p>{starsRating}</p>
    </div>
  );
};

export default Raiting;
