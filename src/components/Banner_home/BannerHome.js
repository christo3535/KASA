import React from 'react';
import "./banner_home.css"
import BannerImg from "@/images/bannerHome.jpg"

const BannerHome = () => {
    return (
        <div className='banner-home'>
            <img className={"bannerHome"} src={BannerImg} alt="Vue de mer, falaises et forêt"/>
            <div className='bannerText'>
              <p>Chez vous, partout et ailleurs</p>
            </div>
        </div>
    );
};

export default BannerHome;