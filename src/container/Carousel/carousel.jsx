
import images from '../../constants/images';

import './carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function play() {
  const video = document.querySelector('.responsive-video');
  if (video) {
    video.play();
  }
}

const carousel = () => (
  <div id="home" className="video-container " >
    
    <video className="responsive-video" onLoadedData={play} autoPlay loop muted playsinline >
        <source src={images.video} type="video/mp4" />
      </video>
  </div>
);

export default carousel;

