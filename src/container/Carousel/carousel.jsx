
import images from '../../constants/images';

import './carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const carousel = () => (
  <div id="home" className="video-container" >
    <video className="responsive-video" autoPlay loop muted>
        <source src={images.video} type="video/mp4" />
      </video>
  </div>
);

export default carousel;

