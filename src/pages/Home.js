import React from 'react';
import appartements from '../data/logements.json'

const Home = () => {
    return (
        <div>
        {appartements.map(i => <div key={i.id}>
            <h1>{i.title}</h1>
        </div>)}
            Home Marche !
        </div>
    );
};

export default Home;