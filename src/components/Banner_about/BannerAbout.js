import React from 'react';
import "./bannerAbout.css"
import BannerImgA from '../../images/bannerA.jpg'
const BannerAbout = () => {
    return (
        <div className='BannerAbout'>
            <img className='bannerImg' src={BannerImgA } alt="Paysage de montagne"/>
        </div>
    );
};

export default BannerAbout;