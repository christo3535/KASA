import React from 'react';
import BannerAbout from '@/components/Banner_about/BannerAbout';
import AboutData from "../data/aboutData.json"
import Collapse from '../components/Accordeon/Collapse';
const About = () => {
    return (
        <div className='aboutContainer'>
          <BannerAbout/>
          
         <div className='dropdownContainer'>
          
              {AboutData.map ((element, index) =>
                <Collapse key={ index} content= { element.content} title= {element.title}/>
              )}
            
         </div>

        </div>
    );
};

export default About;