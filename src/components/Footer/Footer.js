import React from 'react';
import './footer.css'
import Logo from  '@/images/logo.png'
const Footer = () => {
    return (
        
        <footer className='Footer'>
         <img className='logoF' src={ Logo }alt='logo Kasa'/>
            
          <p>© 2020 Kasa. All rights reserved</p>
        </footer>
        

    );
};

export default Footer;