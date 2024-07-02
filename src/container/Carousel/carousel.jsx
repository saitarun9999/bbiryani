
import images from '../../constants/images';

import './carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


const carousel = () => (
  <div id="home">
    
    <Carousel showArrows={true} showStatus={false} showThumbs={false} className='carousel' autoPlay interval={2000} >
      <div className='item'>
        <img src={images.slider1} />
        <div class="content">
            <div class="author">Bindaz Briyanis</div>
            <div class="title">SLIDER 1</div>
            <div class="topic">Briyani</div>
            <div class="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            </div>
      </div>
      <div className='item'>
        <img src={images.slider2} />
        <div class="content">
            <div class="author">Bindaz Briyanis</div>
            <div class="title">SLIDER 1</div>
            <div class="topic">Briyani</div>
            <div class="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            </div>
      </div>
      <div className='item'>
        <img src={images.slider3} />
        <div class="content">
            <div class="author">Bindaz Briyanis</div>
            <div class="title">SLIDER 1</div>
            <div class="topic">Briyani</div>
            <div class="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            </div>
      </div>
      <div className='item'>
        <img src={images.slider4} />
        <div class="content">
            <div class="author">Bindaz Briyanis</div>
            <div class="title">SLIDER 1</div>
            <div class="topic">Briyani</div>
            <div class="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            </div>
      </div>
      <div className='item'>
        <img src={images.slider5} />
        <div class="content">
            <div class="author">Bindaz Briyanis</div>
            <div class="title">SLIDER 1</div>
            <div class="topic">Briyani</div>
            <div class="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            </div>
      </div>
    </Carousel>



  </div>
);

export default carousel;

