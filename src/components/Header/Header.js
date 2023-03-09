import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import  './header.css'
import Logo from '@/images/LOGO.jpg'
const Header = () => {
    return (
        
            <header className='header-nav'>
             <Link to='/home'>
               <img className= { 'logo'} src= { Logo } alt='logo de Kasa'/>
             </Link>
                <nav >
                    <ul>
                       <li>
                      <NavLink className={({ isActive}) => (isActive ? "activated" : "link")} to='/home'>
                              Accueil
                      </NavLink>

                      </li>
                      <li>
                      <NavLink className={({ isActive}) => (isActive ? "activated" : "link")} to='/about'>

    
                            A Propos
                      </NavLink>
                      </li>
                         
                    </ul>
                </nav>
            </header>
        
    );
};

export default Header;