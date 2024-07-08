import React, { useState } from 'react';
import './menu.css';
import MenuItems from '../../constants/menu';
import subCategories from '../../constants/subcategory';
import categories from '../../constants/categories';
import images from '../../constants/images';


const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('APPETIZERS');
  const [selectedSubCategory, setSelectedSubCategory] = useState(subCategories[selectedCategory][0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory('APPETIZERS');
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  return (
    <div className='menu-section' id='menu'>
      <div className="menu_heading">
        <h4 className='menu-heading-title'>Menu</h4>
        <p className='menu-heading-description'>At Bindaz Biryanis, we take pride in offering a diverse and delectable menu that promises to tantalize your taste buds. Each dish is prepared with the finest ingredients and a blend of aromatic spices, ensuring a delightful culinary experience.</p>
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
      <div className='menu-item-container'>
      <img src={selectedCategory !== 'All' && images[selectedCategory]} height={400} />
        <div className="menu-items">
          {MenuItems
            .filter((item) => selectedCategory === 'All' || item.category === selectedCategory)
            .filter((item) => selectedSubCategory === 'All' || (item.subCategory && item.subCategory === selectedSubCategory))
            .map((item) => (
              <div className="" key={item.id} data-category={item.category}>
                <div className="menu-item">
                  <h3>{item.name} --- {item.price}</h3>
                  
                </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Menu;


