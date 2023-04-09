import React from "react";
import BannerAbout from "@/components/Banner_about/BannerAbout";
import AboutData from "@/data/aboutData.json";
import Collapse from "@/components/Accordeon/Collapse";
import "./about.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <BannerAbout />

      <div className="collapseContainer">
        {AboutData.map((element, index) => (
          <Collapse
            key={index}
            content={element.content}
            title={element.title}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
