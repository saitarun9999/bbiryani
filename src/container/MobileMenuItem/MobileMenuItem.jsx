import React, { Component } from 'react';
import './MobileMenuItem.css';

class MobileMenuItem extends Component {
  render() {
    const { item } = this.props;
    
    return (
      <div className="menu-item">
        <div className="item-info">
          <div className="item-title">
            <span className={`veg-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}></span>
            {item.title}
          </div>
        </div>
        <div className="item-price">
          ${item.cost}
        </div>
      </div>
    );
  }
}

export default MobileMenuItem;