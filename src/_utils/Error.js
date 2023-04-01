import React from 'react';
import { Link } from 'react-router-dom';
import './error.css'


const Error = () => {
    return (
        <div className='Error'>
            <h1 className='error-title'>404</h1>
            <h2 className='error_info'>Oups!La page que <span>vous demandez n'existe pas!</span></h2>
            <Link  className='backLink' to='/'>Retournez sur la page d'accueil</Link>
        </div>
    );
};

export default Error;