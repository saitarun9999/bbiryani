import React from 'react';
import images from '../../constants/images';

import './offers.css';


const Offers = () => {
     

     return (  
          <div className='section__padding' id='offers'>
                <div className='menu_heading'>
        <h4 className='menu-heading-title'>Our Offers</h4>
       
      </div>
  <div class="image-grid">
    <img src={images.about1} alt="about 1" height="200" width="500"/>
    <img src={images.about2} alt="about 2" height="200" width="500"/>
    <img src={images.about3} alt="about 3" height="200" width="500"/>
    <img src={images.about4} alt="about 4" height="200" width="500"/>

</div>    
          </div>
     )    
 }


export default Offers