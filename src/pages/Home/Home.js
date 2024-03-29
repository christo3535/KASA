import React from "react";
import appartements from "@/data/logements.json";
import BannerHome from "@/components/Banner_home/BannerHome";
import Card from "@/components/Card/Card";
import "./home.css"

const Home = () => {
  return (
    <section>
      <BannerHome />   
      <div className="appartementGrid">
        {appartements.map((appartement) => (
          <Card key={appartement.id} appartement= {appartement}/>//retourne un composant Card pour chaque appartement,clé unique basée sur id
        ))}
      </div>
    </section>
  );
};

export default Home;
