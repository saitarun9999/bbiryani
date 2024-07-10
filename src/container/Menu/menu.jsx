import React, { useState } from 'react';
import './menu.css';
import MenuItems from '../../constants/menu';
import subCategories from '../../constants/subcategory';
import categories from '../../constants/categories';
import images from '../../constants/images';

const Menu = () => {


  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(subCategories[selectedCategory]?.[0]);


  const handleCategoryClick = (category) => {
    setSelectedCategory([])
    setSelectedCategory(category);
    setSelectedSubCategory(subCategories[category]?.[0]);
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory([])
    setSelectedSubCategory(subCategory);
  };


  const filteredItems = MenuItems?.filter((item) => {
    return item?.category === selectedCategory && item?.subCategory === selectedSubCategory
  })


  return (
    <div className='menu-section' id='menu'>
      <div className='menu_heading'>
        <h4 className='menu-heading-title'>Menu</h4>
        <p className='menu-heading-description'>
          At Bindaz Biryanis, we take pride in offering a diverse and delectable menu that promises to tantalize your taste buds. Each dish is prepared with the finest ingredients and a blend of aromatic spices, ensuring a delightful culinary experience.
        </p>
      </div>
      <div className='categories'>
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
      {subCategories?.length !== 0 && (
        <div className='subcategories'>
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
        {selectedCategory && images[selectedCategory] && (
          <img src={images[selectedCategory]} alt={selectedCategory} height={400} />
        )}
        <div className='menu-items'>
          {filteredItems.map((item) => (
            <div className='menu-item' key={item.name} data-category={item.category}>
              <button className="subcategory-btn-menu">
                <div className="item-details">
                  <span className="item-name">{item.name}</span>

                  <span className="item-price">{item.price}</span>
                </div>
              </button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;