import React from 'react';
import './Header.css';
import { SubHeading } from '../../components';
import images  from '../../constants/images';

import { Carousel } from 'react-bootstrap';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="about">
    <div className="app__wrapper_img">
    <div className="grid-container">
      <div className="grid-item">
        <img src={images.about1} alt="Image 1" />
      </div>
      <div className="grid-item">
        <img src={images.about2} alt="Image 2" />
      </div>
      <div className="grid-item">
        <img src={images.about3} alt="Image 3" />
      </div>
      <div className="grid-item">
        <img src={images.about4} alt="Image 4"  />
      </div>
    </div>
      
    </div>
    <div className="app__wrapper_info">
      <p className='about-us'> About us </p>
      {/* <h1 className="app__header-h1">Bindaz Biryanis</h1> */}
      <img src={images.bindaz} alt="logo" />
      <p className="p__opensans" style={{fontSize: '18px' }}> At Bindaz Biryanis, we believe that good food is best enjoyed with great company. Our warm and welcoming ambiance is perfect for family gatherings, friendly get-togethers, or a quiet meal for two. We are committed to providing exceptional service and ensuring that every visit leaves you with a smile.
      <span className="p__opensans wrap" style={{ margin: '1rem 0', display: 'flex', color: '#Da281c', fontWeight: '600', fontSize: '20px' }}> Savor the taste of tradition and let your senses be delighted at Bindaz Biryanis. </span>
      </p>
      <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>
    </div>

    
  </div>
);

export default Header;