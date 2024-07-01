import React from 'react';

import { Footer, Gallery, Header,Carousel} from './container';
import { Navbar } from './components';
import './App.css';

import Menu from './container/Menu/menu';

import Franchise from './container/Franchise/franchise';



const App = () => (
  <div>
    <Navbar />
    <Carousel/>
    <Header />
    <Menu/>
    <Gallery />
    <Franchise/>
    <Footer />
  </div>
);

export default App;
