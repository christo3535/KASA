import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./appartements.css";
import Collapse from "../components/Accordeon/Collapse";
import Raiting from "@/components/Rating/Raiting";
import Error from "@/_utils/Error"
import Caroussel from "@/components/Caroussel/Caroussel";

const Appartements = () => {
  const { id } = useParams();
  const [data, setData] = useState([]); //4 setData maj du state
  const [loading, setLoading] = useState(true);
  let logement = data.find((e) => e.id === id); //5 isole le logement
  const [error, setError] = useState()
  
  useEffect(() => {
    fetch("/data/logements.json") //1
      .then((res) => res.json())
      .then((data) => {
        setData(data); //2 tous les logements
        setLoading(false);
      })
      .catch((err) => {
       setError(err)
       setLoading(false)
      })
  }, []);

  if(!logement){
    return <Error/>
  }

  return !loading ? !error ?(
    <main className="Appartements">
      <Caroussel picturesCaroussel={logement.pictures}/>
      <div className="logement_contenair">
    <div className="infos">
        <div className="logement_head">
          <h1 className="title_logement">{logement.title}</h1>
          <h2 className="head_location">{logement.location}</h2>
        </div>
        <div>
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
  ) : <h1>Error</h1>: (
    <h1>Loading...</h1>
  );
};

export default Appartements;