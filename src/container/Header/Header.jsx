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
      <SubHeading title="About us" />
      <h1 className="app__header-h1">Bindaz Briyanis</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus necessitatibus totam hic accusamus accusantium rem obcaecati quae consectetur minus id doloremque, repellat officia tenetur ut maxime quibusdam voluptatibus animi.
      <span className="p__opensans wrap" style={{ margin: '0.6rem 0', display: 'flex', color: '#FDD36A', fontWeight: '600' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem distinctio </span>
      </p>
      <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>
    </div>

    
  </div>
);

export default Header;