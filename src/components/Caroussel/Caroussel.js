import React from "react";
import { useState } from "react";
import arrowRight from "../../images/arrow-right.png";
import arrowLeft from "../../images/arrow-left.png";
import "./caroussel.css";

const Caroussel = ({ picturesCaroussel }) => {
  const [index, setIndex] = useState(0);

  function handleNextSlide() {
    if (index + 1 === picturesCaroussel.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePreventSlide() {
    if (index === 0) {
      setIndex(picturesCaroussel.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  let picture = picturesCaroussel[index];
  let count = index + 1;
  
  return (
    <div className="caroussel">
        <div className="slider">
        <img className="imageCaroussel" src={picture} alt="appartement" />
         </div>
        
          <img
            className="caroussel_arrow  caroussel_arrow_right"
            src={arrowRight}
            alt="arrow"
            onClick={handleNextSlide}
          />
          <img
            className="caroussel_arrow caroussel_arrow_left"
            src={arrowLeft}
            alt="arrow"
            onClick={handlePreventSlide}
          />
          <span className="styleCount">{count}/{picturesCaroussel.length}</span>
    
    
    </div>
  );
};

export default Caroussel;
