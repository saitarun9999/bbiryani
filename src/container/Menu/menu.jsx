import React, { useState } from 'react';
import './menu.css';
import MenuItems from '../../constants/menu';
import subCategories from '../../constants/subcategory';
import categories from '../../constants/categories';


const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory('All');
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  return (
    <div className='menu-section' id='menu'>
      <div className="menu_heading">
        <h4 className='menu-heading-title'>Our Special Menu</h4>
        <p className='menu-heading-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati ipsa corporis ad odio, sunt animi, incidunt velit eveniet autem fugit, tempora tempore! Harum voluptatum provident quidem voluptates praesentium. Magni.</p>
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
      {selectedCategory !== 'All' && subCategories[selectedCategory] && (
        <div className="subcategories">
          {subCategories[selectedCategory].map((subCategory) => (
            <button
              key={subCategory}
              className={`subcategory-btn ${selectedSubCategory === subCategory ? 'active' : ''}`}
              onClick={() => handleSubCategoryClick(subCategory)}
            >
              {subCategory.toUpperCase()}
            </button>
          ))}
        </div>
      )}
      <div className="menu-items">
        { MenuItems
          .filter((item) => selectedCategory === 'All' || item.category === selectedCategory)
          .filter((item) => selectedSubCategory === 'All' || (item.subCategory && item.subCategory === selectedSubCategory))
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


