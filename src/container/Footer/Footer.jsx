import React, { useState } from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiMapPin, FiPhone } from 'react-icons/fi';
import images from '../../constants/images';
import './Footer.css';

const Footer = () => {
  const [showModal] = useState(false);

  return (
    <div className="app__footer section__padding-footer" id="footer">


      <div className="app__footer-links">
        <div className="app__footer-links_logo">
          <img src={images.logo} alt="footer_logo" />
          <p className="p__opensans">&quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptatibus sed&quot;</p>

          <div className="app__footer-links_icons">
            <a href='https://www.facebook.com'><FiFacebook /></a>
            <a href='https://www.twitter.com'><FiTwitter /></a>
            <a href='https://www.instagram.com/'><FiInstagram /></a>
          </div>
        </div>

        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Quick Links</h1>
          <p className="p__opensans">About us</p>
          <p className="p__opensans">Gallery</p>
          <p className="p__opensans">Franchise</p>
        </div>

        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Opening Time</h1>

          <p className="p__opensans">Monday - Friday</p>
          <p className="p__opensans">10:00 am - 11:00 pm</p>
          <p className="p__opensans">Monday - Friday</p>
          <p className="p__opensans">10:00 am - 11:00 pm</p>
        </div>

        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans"><FiMapPin />&nbsp; 164 Enlington Ave E,<br/> ON M4P 1G4</p>
          <p className="p__opensans"><FiPhone />&nbsp; 416 - 486 - 6644</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="text">Bindaz Briyanis&nbsp;@2024  All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
