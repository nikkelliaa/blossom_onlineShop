import React from 'react';
import s from './HomePage.module.css'
import Pexels from '../../assets/Pexels.png'


const HomePage = () => {
    return (
        <div className={s.homePexels_image}>
            <img src={Pexels} alt="Pexels_photo" className={s.img_pexels} />
        </div>
    );
};

export default HomePage;