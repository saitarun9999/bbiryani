import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const handleDownload = () => {
    const fileUrl = 'https://drive.google.com/file/d/1BwEUlxvNn52iS2kyaU0SJslawOG_-H0X/view';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', true);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };
  return (
    <nav className="app__navbar">

      <div className="app__navbar-logo">
        <img src={images.logo} alt="app__logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About Us</a></li>
        <li className="p__opensans"><a href="#offers">Our Offers</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#franchise">Franchise</a></li>
        <li className="p__opensans"><a href="#footer">Contact Us</a></li>
      </ul>

      {/* <div> 
        <button onClick={handleDownload}> Download Menu </button>
      </div> */}

      <div className="app__navbar-smallscreen">

        <GiHamburgerMenu color="#000" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu   fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#franchise" onClick={() => setToggleMenu(false)}>Franchise</a></li>
              <li><a href="#offers" onClick={() => setToggleMenu(false)}>Our Offers</a></li>
              <li><a href="#footer" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;