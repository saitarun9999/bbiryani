import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { FiBarChart, FiBold, FiCoffee, FiHome, FiInfo, FiMenu, FiPhoneCall } from 'react-icons/fi';
import { RiCheckboxMultipleBlankFill } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home"><FiHome /> Home</a></li>
        <li className="p__opensans"><a href="#about"><FiInfo /> About Us</a></li>
        <li className="p__opensans"><a href="#menu"><FiMenu /> Menu</a></li>
        <div className="app__navbar-logo">
        <img src={images.logo} alt="app__logo" />
      </div>
        <li className="p__opensans"><a href="#franchise"><RiCheckboxMultipleBlankFill/> Franchise</a></li>
        <li className="p__opensans"><a href="#offers"><FiBarChart/> Our Offers</a></li>
        <li className="p__opensans"><a href="#footer"><FiPhoneCall/> Contact Us</a></li>
      </ul>
      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#franchise" onClick={() => setToggleMenu(false)}>Franchise</a></li>
              <li><a href="#footer" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;