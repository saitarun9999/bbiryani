import React, { useState, useEffect, useMemo } from 'react';
import './menu.css';
import MenuItems from '../../constants/menu';
import subCategories from '../../constants/subcategory';
import categories from '../../constants/categories';
import images from '../../constants/images';

const Menu = () => {
  const initialCategory = categories[0];
  const initialSubCategory = subCategories[initialCategory]?.[0];

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState(initialSubCategory);
  const [subCategoriesLoaded, setSubCategoriesLoaded] = useState(true);

  const handleCategoryClick = (category) => {
    setSelectedSubCategory(null);
    const initialSubCategory = subCategories[category]?.[0];
    setSelectedCategory(category);
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  useEffect(() => {
    if (categories.length > 0 && !subCategoriesLoaded) {
      setTimeout(() => {
        setSubCategoriesLoaded(true);
      }, 50);
    }
  }, [categories, subCategoriesLoaded]);

  const filteredMenuItems = useMemo(() => {
    return MenuItems.filter((item) => {
      return selectedCategory === 'ALL' || item.category === selectedCategory;
    }).filter((item) => {
      return selectedSubCategory === 'ALL' || item.subCategory === selectedSubCategory;
    });
  }, [selectedCategory, selectedSubCategory]);

  

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
      {selectedCategory !== 'ALL' && subCategoriesLoaded && subCategories[selectedCategory] && (
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
          {filteredMenuItems.map((item) => (
            <div className='menu-item' key={item.id} data-category={item.category}>
              <h3>
                {item.name} --- <span style={{ marginLeft: "10px" }}>{item.price}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;