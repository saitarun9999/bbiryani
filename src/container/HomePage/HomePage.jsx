import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Carousel from '../Carousel/carousel';
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery';
import Franchise from '../Franchise/franchise';
import ScrollToTop from '../../scroll-top';
import Footer from '../Footer/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Header />
      <Gallery />
      <Franchise />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default HomePage;
