
import images from '../../constants/images';

import './carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


const carousel = () => (
  <div id="home" className="video-container " >
    
    <video className="responsive-video"  autoPlay loop muted>
        <source src={images.video} type="video/mp4" />
      </video>
  </div>
);

export default carousel;

