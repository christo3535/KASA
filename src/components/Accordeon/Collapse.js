import React from "react";
import { useState } from "react";
import ArrowUp from "../../images/arrow.png";
import ArrowDown from "../../images/arrow_back.png";
import "./collapse.css";

const Collapse = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="collapse">
      <h2 className="collapse_title" onClick={handleToggle}>
        {title}
        {toggle ? (
          <img className="arrow arrow_up" src={ArrowUp} alt="arrow" />
        ) : (
          <img className="arrow arrow_down" src={ArrowDown} alt="arrow" />
        )}
      </h2>

      <div className={toggle ? "collapse_content" : "collapse_hiden"}>
        {Array.isArray(content)
          ? content.map((element, index) => {
              return <p key={index}>{element}</p>;
            })
          : content}
      </div>
    </div>
  );
};

export default Collapse;
