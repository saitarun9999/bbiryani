import React from 'react';
import { FiFacebook, FiInstagram, FiMapPin, FiPhone } from 'react-icons/fi';
import images from '../../constants/images';
import './Footer.css';

const Footer = () => {


  return (
    <div className="app__footer section__padding-footer" id="footer">
      <div className="app__footer-links">
        <div className="app__footer-links_logo">
          <div className='image'>
          <img src={images.logoAnim} className='app__logo' alt="footer_logo" />
            <img src={images.bbLogo} alt="footer_logo" className='app__logo1' />
         
          </div>
          <p className="p__opensans">&quot;Savor The Taste Of Tradition And Let Your Senses Be Delighted At Bindaz Biryanis.&quot;</p>

          <div className="app__footer-links_icons">
            <p style={{ color: '#Da281c' }}> Follow us on</p>
            <a href='https://www.facebook.com/bindazbiryanis?mibextid=ZbWKwL'><FiFacebook /></a>
            {/* <a href='https://www.twitter.com'><FiTwitter /></a> */}
            <a href='https://www.instagram.com/bindazbiryanis?igsh=Mnlvb2h2Mzk0eG1i'><FiInstagram /></a>
          </div>
        </div>

        {/* <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Quick Links</h1>
          <p className="p__opensans"><a href='#about'>About us </a></p>
          <p className="p__opensans"><a href='#menu'>Menu </a></p>
          <p className="p__opensans"><a href='#about'>Franchise </a></p>
        </div> */}

        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Timings</h1>
          <p className="p__opensans"><span>Monday to Wednesday</span></p>
          <p className="p__opensans">11.30 am - 10.30 pm</p>
          <p className="p__opensans"><span>Thursday to Sunday</span></p>
          <p className="p__opensans">11.30 am - 12 pm</p>
        </div>

        <div className="app__footer-links_contact">

          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans"><FiPhone style={{ color: '#Da281c' }} />&nbsp; <span>416 - 486 - 6644</span> </p>
          <p className="p__opensans"><FiMapPin style={{ color: '#Da281c' }} />&nbsp; 164 Eglinton Avenue East,<br /> ON M4P 1G4 <br /> Toronto, Ontario, Canada</p>
        </div>
        <div className="app__footer-links_contact">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.123510418626!2d-79.39598322511313!3d43.70798224888787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33640f60c585%3A0x2582e1710b8a3536!2s164%20Eglinton%20Ave%20E!5e0!3m2!1sen!2sin!4v1720935423443!5m2!1sen!2sin"
            width="250"
            title={"myFrame"}
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>


      <div className="footer__copyright">
        <p className="text">Bindaz Briyanis&nbsp;@2024  All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
