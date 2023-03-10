import React from "react";
import appartements from "@/data/logements.json";
import BannerHome from "@/components/Banner_home/BannerHome";
import Card from "@/components/Card/Card";

const Home = () => {
  return (
    <section>
      <BannerHome />
      
      <div className="apartementGrid">
        {appartements.map((appartement, index) => (
          <Card key={appartement.id} appartement= {appartement}/>
        ))}
      </div>
    </section>
  );
};

export default Home;
