import React, { useEffect } from 'react';
import "../Preloader/preloader.css";
import images from '../../constants/images';

const Preloader = ({ loading }) => {

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
      }, 100 / (100 / 1)); 
    }
  }, [loading]);

  return (
    <div className={`preloader ${loading ? 'visible' : 'hidden'}`}>
      <img src={images.logo} alt="Logo" className="logo" />
    </div>
  );
};

export default Preloader;
