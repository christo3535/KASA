import React from "react";
import { useState } from "react";
import arrowRight from "../../images/arrow_forward.png";
import arrowLeft from "../../images/arrowleft.png";
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
       
        <img className="imageCaroussel" src={picture} alt="appartement" />
       
        
          <img
            className="caroussel_arrow  caroussel_arrow_right"
            src={arrowRight}
            alt=""
            onClick={handleNextSlide}
          />
          <img
            className="caroussel_arrow caroussel_arrow_right"
            src={arrowLeft}
            alt=""
            onClick={handlePreventSlide}
          />
          <span className="styleCount">{count}</span>
    
    
    </div>
  );
};

export default Caroussel;
