import Navbar from "../../components/Navbar/Navbar";
import Footer from '../Footer/Footer';
import MobileMenuItem from '../MobileMenuItem/MobileMenuItem';

const MobileMenu = () => {
  return (
    <div>
      <Navbar/>
      <div className='mobile-menu-section' id='mobile-menu'>
        <MobileMenuItem/>
      </div>
      <Footer/>
    </div>
  );
};

export default MobileMenu;
