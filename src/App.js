import { useEffect, useState ,React } from 'react';
import { Footer, Gallery, Header, Carousel } from './container';
import { Navbar } from './components';
import './App.css';
import Menu from './container/Menu/menu';
import Franchise from './container/Franchise/franchise';
import ScrollToTop from './scroll-top';
import Offers from './container/Offers/offers';
import Preloader from './container/Preloader/preloader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Preloader loading={loading} />
      {!loading && (
        <div>
        <Navbar />
        <Carousel />
        <Header />
        {/* <Offers /> */}
        <Menu />
        <Gallery />
        <Franchise />
        <ScrollToTop />
        <Footer />
      </div>
      )}
    </div>
  );
};





export default App;
