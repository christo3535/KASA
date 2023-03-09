import React from 'react';
import appartements from '@/data/logements.json'

const Card = () => {
    return (
        <div>
            Card crée
             {/* { {appartements.map(i => <div key={i.id}>
            <h1>{i.title}</h1>
        </div>)} } */}
        {appartements.map(i => <div key={i.id}>
            <h1>{i.title}</h1>
        </div>)}
        </div>
    );
};

export default Card;