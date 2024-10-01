import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleScrollToSection = (sectionId) => {
    const currentPath = window.location.pathname;

    if (currentPath === '/') {
      // Scroll to the specified section on the home page
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page and scroll to the specified section
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Delay to allow navigation
    }
  };

  const handleBlogClick = () => {
    // Scroll to the top when navigating to the blog
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/blog');
  };

  const handleHomeClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
    navigate('/'); // Navigate to the home page
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img
          src={images.logoAnim}
          alt="app__logo"
          className="app__logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
        <img
          src={images.bbLogo}
          alt="app__logo1"
          className="app__logo1"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="/" onClick={handleHomeClick}>Home</a> {/* Updated for smooth scroll */}
        </li>
        <li className="p__opensans">
          <a onClick={() => handleScrollToSection('about')}>Our Story</a>
        </li>
        <li className="p__opensans">
          <a onClick={() => handleScrollToSection('menu')}>Menu</a>
        </li>
        <li className="p__opensans">
          <a onClick={handleBlogClick}>Blog</a>
        </li>
        <li className="p__opensans">
          <a onClick={() => handleScrollToSection('franchise')}>Franchise</a>
        </li>
        <li className="p__opensans">
          <a onClick={() => handleScrollToSection('footer')}>Contact Us</a>
        </li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#Da281c"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="/" onClick={handleHomeClick}>Home</a> {/* Updated for smooth scroll */}
              </li>
              <li>
                <a onClick={() => { handleScrollToSection('about'); setToggleMenu(false); }}>Our Story</a>
              </li>
              <li>
                <a onClick={() => { handleScrollToSection('menu'); setToggleMenu(false); }}>Menu</a>
              </li>
              <li>
                <a onClick={() => { handleBlogClick(); setToggleMenu(false); }}>Blog</a>
              </li>
              <li>
                <a onClick={() => { handleScrollToSection('franchise'); setToggleMenu(false); }}>Franchise</a>
              </li>
              <li>
                <a onClick={() => { handleScrollToSection('footer'); setToggleMenu(false); }}>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
