import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
 import "./appartements.css"
import Collapse from "../components/Accordeon/Collapse";
import Raiting from "@/components/Rating/Raiting";
import Error from "@/_utils/Error";
import Caroussel from "../components/Caroussel/Caroussel";

import data from "../data/logements.json";
// import "./apartessai.css"

const Appartements = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(id);
    setLogement(data.find((e) => e.id === id));
    setLoading(false);
    
  }, [id]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (!logement) {
    return <Error />;
  }

  return (
    <main className="Appartements">
      <Caroussel picturesCaroussel={logement.pictures} />
      <div className="logement_contenair">
        <div className="infoL">
        {/* <div className="logement_head"> */}
          <h1 className="title_logement">{logement.title}</h1>
          <h2 className="head_location">{logement.location}</h2>
        {/* </div> */}
        <div className="tagC">
          {logement.tags.map((tag, index) => (
            <span className="tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
        </div>
        <div className="logement_host">
          <div className="host_infos">
            <p className="host_name">{logement.host.name}</p>
            <img
              className="host_pic"
              src={logement.host.picture}
              alt="propriaitaire du logement"
            />
          </div>
          <div className="logement_host_stars">
            <Raiting rating={logement.rating} />
          </div>
        </div>
      </div>
      <div className="Accordeon">
        <Collapse title={"Description"} content={logement.description} />
        <Collapse title={"Equipements"} content={logement.equipments} />
      </div>
    </main>
  );
};

export default Appartements;
