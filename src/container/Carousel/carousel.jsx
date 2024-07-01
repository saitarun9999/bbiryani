
import images from '../../constants/images';
import { Carousel } from 'react-bootstrap';

import './carousel.css';


const carousel = () => (
  <div id="home">

    <div class="carousel">
      <div class="list">
        <div class="item">
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
        <div class="item">
          <img src={images.slider2} />
          <div class="content">
            <div class="author">Bindaz Briyanis</div>
            <div class="title">DESIGN SLIDER</div>
            <div class="topic">Briyani</div>
            <div class="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>

          </div>
        </div>
        <div class="item">
          <img src={images.slider3} />
          <div class="content">
            <div class="author">Bindaz Briyanis</div>
            <div class="title">DESIGN SLIDER</div>
            <div class="topic">Briyani</div>
            <div class="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>

          </div>
        </div>
        <div class="item">
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
      </div>
      <div class="thumbnail">
        <div class="item">
          <img src={images.slider3} />

        </div>
        <div class="item">
          <img src={images.slider4} />

        </div>
        <div class="item">
          <img src={images.slider5} />

        </div>
        <div class="item">
          <img src={images.slider1} />

        </div>
      </div>


      <div class="arrows">
        <button id="prev">{"<"}</button>
        <button id="next">{">"}</button>
      </div>
      <div class="time"></div>
    </div>
  </div>
);

export default carousel;

