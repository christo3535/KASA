import React from 'react';
import appartements from '@/data/logements.json'
import BannerHome from '@/components/Banner_home/BannerHome';
import Card from '@/components/Card/Card';
const Home = () => {
    return (
        <section>
        <BannerHome/>
{/*         
        { {appartements.map(i => <div key={i.id}>
            <h1>{i.title}</h1>
        </div>)} }
              */}
            { <Card/> }
        </section>
    );
};

export default Home;