import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';

const Card = ({appartement}) => {
    return (
        <div className='Card'>
            <Link to={ `/appartements/${appartement.id}` }>
            
              <img className={ 'appartementImg' } src = { appartement.cover } alt="photos des appartements à louer"/>
              <h2 className={"appartementTitle"}>{ appartement.title }</h2>

            </Link>
        </div>
    );
};

export default Card;