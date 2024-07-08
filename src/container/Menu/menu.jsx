// import React, { useState } from 'react';
// import './menu.css';
// import MenuItems from '../../constants/menu';
// import subCategories from '../../constants/subcategory';
// import categories from '../../constants/categories';
// import images from '../../constants/images';

// const Menu = () => {
//   const [selectedCategory, setSelectedCategory] = useState('ALL');
//   const [selectedSubCategory, setSelectedSubCategory] = useState('ALL');

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setSelectedSubCategory('ALL');
//   };

//   const handleSubCategoryClick = (subCategory) => {
//     console.log('Selected SubCategory:', subCategory);
//     setSelectedSubCategory(subCategory);
//   };

//   const filteredMenuItems = MenuItems
//     .filter((item) => selectedCategory === 'ALL' || item.category === selectedCategory)
//     .filter((item) => selectedSubCategory === 'ALL' || (item.subCategory && item.subCategory === selectedSubCategory));

//   return (
//     <div className='menu-section' id='menu'>
//       <div className='menu_heading'>
//         <h4 className='menu-heading-title'>Menu</h4>
//         <p className='menu-heading-description'>
//           At Bindaz Biryanis, we take pride in offering a diverse and delectable menu that promises to tantalize your taste buds. Each dish is prepared with the finest ingredients and a blend of aromatic spices, ensuring a delightful culinary experience.
//         </p>
//       </div>
//       <div className='categories'>
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
//             onClick={() => handleCategoryClick(category)}
//           >
//             {category.toUpperCase()}
//           </button>
//         ))}
//       </div>
//       {selectedCategory !== 'ALL' && subCategories[selectedCategory] && (
//         <div className='subcategories'>
//           {subCategories[selectedCategory].map((subCategory) => (
//             <button
//               key={subCategory}
//               className={`subcategory-btn ${selectedSubCategory === subCategory ? 'active' : ''}`}
//               onClick={() => handleSubCategoryClick(subCategory)}
//             >
//               {subCategory.toUpperCase()}
//             </button>
//           ))}
//         </div>
//       )}
//       <div className='menu-item-container'>
//         {selectedCategory == selectedCategory && images[selectedCategory] && (
//           <img src={images[selectedCategory]} alt={selectedCategory} height={300} />
//         )}
//         <div className='menu-items'>
//           {filteredMenuItems.map((item) => (
//             <div className='menu-item' key={item.id} data-category={item.category}>
//               <h3>
//                 {item.name} --- {item.price}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;

import React, { useState, useEffect } from 'react';
import './menu.css';
import MenuItems from '../../constants/menu';
import subCategories from '../../constants/subcategory';
import categories from '../../constants/categories';
import images from '../../constants/images';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Initialize with first category
  // Initialize with first subcategory of selected category (or 'ALL')
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    subCategories[selectedCategory]?.[0] || 'ALL'
  );

  const handleCategoryClick = (category) => {
    // Get the first subcategory (or 'ALL' if none)
    const initialSubCategory = subCategories[category]?.[0] || 'ALL';
    setSelectedCategory(category);
    setSelectedSubCategory(initialSubCategory);
  };

  const handleSubCategoryClick = (subCategory) => {
    console.log('Selected SubCategory:', subCategory);
    setSelectedSubCategory(subCategory);
  };

  const filteredMenuItems = MenuItems.filter((item) => {
    return selectedCategory === 'ALL' || item.category === selectedCategory;
  }).filter((item) => selectedSubCategory === 'ALL' || (item.subCategory && item.subCategory === selectedSubCategory));

  // Ensure subCategories are available before rendering subCategory buttons
  const [subCategoriesLoaded, setSubCategoriesLoaded] = useState(false);
  useEffect(() => {
    if (categories.length > 0 && !subCategoriesLoaded) {
      // Simulate asynchronous loading of subCategories (if needed)
      setTimeout(() => {
        setSubCategoriesLoaded(true);
      }, 100); // Adjust timeout as needed
    }
  }, [categories, subCategoriesLoaded]);

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