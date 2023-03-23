import React from 'react';
import "./rating.css"
 import StarsRed from "../../images/star_red.jpg"
import StarsWhite from "../../images/star_white.png"


const Raiting = ({rating}) => {

 const starsRating = []
//  const starsRed = ( <img   className='stars' src={StarsRed} alt="red stars"/>);
//  const starsWhite = (<img  className='stars'  src={StarsWhite} alt="white stars"/>);
 const calculateRest = 5 - rating;
 
//  for( let a = 0; a < rating; a ++){
//     starsRating.push( starsRed )
//  };

//  for( let b = 0; b < calculateRest; b ++ ){
//     starsRating.push(starsWhite)
//  }

for(let a = 0; a < rating; a++) {
    starsRating.push(<img key={`star-red-${a}`} className='stars' src={StarsRed} alt="red stars" />);
  }
  
  for(let b = 0; b < calculateRest; b++) {
    starsRating.push(<img key={`star-white-${b}`} className='stars' src={StarsWhite} alt="white stars" />);
  }
  
 
    return (
        <div>
            <p>{starsRating}</p>
        </div>
    );
};

export default Raiting;