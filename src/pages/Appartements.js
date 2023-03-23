import React from 'react';
import { useParams } from 'react-router-dom';
import './appartements.css'
import appartement from "../data/logements.json"
import Collapse from '../components/Accordeon/Collapse';
import Raiting from '@/components/Rating/Raiting';


const Appartements = () => {
    const  { id } = useParams()
    let logement = appartement.find(e => e.id === id)

    return (
        <main className='Appartements'>
            <img className='appP' src= {logement.pictures[0]} alt="appartement"/>
            <div className='logement_contenair'>
             <div className='logement_head'>
               <h1 className='title_logement'>{logement.title}</h1>
               <h2 className='head_location'>{logement.location}</h2>
             </div>
                <div>
                    {logement.tags.map((tag, index) => 
                    ( 
                        <span className='tag' key={index}>{tag}</span>
                    )
                    )}
                </div>
                <div className='logement_host'>
                   <div className='host_infos'>
                   <p className='host_name'>{logement.host.name}</p>
                   <img className='host_pic' src={logement.host.picture} alt='propriaitaire du logement'/> 
                   </div>
                   <div className='logement_host_stars'>
                    <Raiting rating= {logement.rating}/>
                   </div>
                </div>
            </div>
              <div className='Accordeon'>
                <Collapse title={"Description"} content={logement.description}/>
                <Collapse title={"Equipements"} content={logement.equipments}/>
              </div>
        </main>
    );
};

export default Appartements;