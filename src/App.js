import React from 'react';

import { Footer, Gallery, Header,Carousel} from './container';
import { Navbar } from './components';
import './App.css';

import Menu from './container/Menu/menu';

import Franchise from './container/Franchise/franchise';

import ScrollToTop from './scroll-top';

import Offers  from './container/Offers/offers';



const App = () => (
  <div>
    <Navbar />
    <Carousel/>
    <Header />
    <Menu/>
    <Gallery />
    {/* <Offers/> */}
    <Franchise/>
    <ScrollToTop />
    <Footer />
  </div>
);

export default App;
