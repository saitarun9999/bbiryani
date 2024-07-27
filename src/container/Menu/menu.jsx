import React, { useState, useEffect } from 'react';
import './menu.css';
import MenuItems from '../../constants/menu';
import subCategories from '../../constants/subcategory';
import categories from '../../constants/categories';
import images from '../../constants/images';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    setSelectedSubCategory("" || '');
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); 
    } else {
      setSelectedCategory(category); 
    }
    setOpenAccordion(null); 
  };

  const handleSubCategoryClick = (subCategory) => {
    if(selectedSubCategory === subCategory) {
      setSelectedSubCategory(null);
    } else {
      setSelectedSubCategory(subCategory);
    }
    setOpenAccordion((prevAccordion) => (prevAccordion === subCategory ? null : subCategory));
  };

  const filteredItems = MenuItems.filter(
    (item) => item.category === selectedCategory && (item.subCategory === selectedSubCategory || !selectedSubCategory)
  );

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
      {/* Desktop view starts */}
      <div className='desktop-view'>
  {selectedCategory && (
    <>
      {subCategories[selectedCategory]?.length > 0 && (
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
      {selectedSubCategory && (
        <div className='menu-item-container'>
          {images[selectedCategory] && (
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
      )}
    </>
  )}
</div>

      {/* Desktop view ends */}
      <div className='mobile-view'>
        {subCategories[selectedCategory]?.length > 0 ? (
          <div className='accordion'>
            {subCategories[selectedCategory]?.map((subCategory) => (
              <div
                key={subCategory}
                className={`accordion-item subcategory-btn ${openAccordion === subCategory ? 'active' : ''}`}
              >
                <div className='accordion-header' onClick={() => handleSubCategoryClick(subCategory)}>
                  {subCategory.toUpperCase()}
                </div>
                <div className='accordion-content'>
                  {filteredItems
                    .filter((item) => item.subCategory === subCategory)
                    .map((item) => (
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
            ))}
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Menu;
