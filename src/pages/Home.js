import React from 'react';
import appartements from '../data/logements.json'
import BannerHome from '../components/Banner_home/BannerHome';
const Home = () => {
    return (
        <section>
        <BannerHome/>
        {/* {appartements.map(i => <div key={i.id}>
            <h1>{i.title}</h1>
        </div>)} */}
            Home Marche !
            
        </section>
    );
};

export default Home;