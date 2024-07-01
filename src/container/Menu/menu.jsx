import React, { useState } from 'react';

import './menu.css';
import images from '../../constants/images';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const menuItems = [
    { id: 1, category: 'APPETIZERS', name: 'Italian Veg Pizza', price: '$18.00', image:images.menu },
    { id: 2, category: 'MAIN COURSE', name: 'Mutton Steak', price: '$24.00', image:images.menu },
    { id: 3, category: 'APPETIZERS', name: 'Veg Cheese Burger', price: '$22.50', image:images.menu },
    { id: 4, category: 'APPETIZERS', name: 'Mutton Ramen', price: '$24.00', image:images.menu },
    { id: 5, category: 'MAIN COURSE', name: 'Chocolate Cake', price: '$16.00', image:images.menu },
    { id: 6, category: 'MAIN COURSE', name: 'Mix Veg Sushi', price: '$20.00', image:images.menu },
  ];

  const categories = ['all', "APPETIZERS" ,"MAIN COURSE"];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='menu-section' id='menu' >
     <div className="menu_heading">
               <h4 className='menu-heading-title'> Our Special Menu</h4>
               <p className='menu-heading-description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati ipsa corporis ad odio, sunt animi, incidunt velit eveniet autem fugit, tempora tempore! Harum voluptatum provident quidem voluptates praesentium. Magni. </p>
          </div>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="menu-items">
        {menuItems
          .filter((item) => selectedCategory === 'all' || item.category === selectedCategory)
          .map((item) => (
            <div className="menu-item" key={item.id} data-category={item.category}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;



