import React from 'react';
import { Link } from 'react-router-dom';
import  './header.css'

const Header = () => {
    return (
        
            <header>
                <nav>
                    <ul>
                        <li><Link to="/home">Acceuil</Link></li>
                        <li><Link to="/appartements">Appartements</Link></li>
                        <li><Link to="/about">About</Link></li>
                         
                    </ul>
                </nav>
            </header>
        
    );
};

export default Header;