import Navbar from "../../components/Navbar/Navbar";
import Footer from '../Footer/Footer';
import MobileMenuItem from '../MobileMenuItem/MobileMenuItem';

import React, { Component } from 'react';
import './MobileMenu.css';

import axios from 'axios';

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      vegFilter: 'all', // 'all', 'veg', 'non-veg'
      selectedCategory: null,
      menuData: { items: [], categories: {} },
      loading: true
    };
  }


  async componentDidMount() {
    await this.fetchMenuData();
  }

  fetchMenuData = async () => {
    try {
      const response = await axios.get('https://sheets.googleapis.com/v4/spreadsheets/1i5jH1YX7kktPm5zkbu_ZJ3w7IZ8Jlwf1xX3ydfPZheQ/values/Sheet1!A:E?key=AIzaSyAGl0M4o-RdglrKL8VDDxLytbWC_QfWNcI');
      
      var data = {"items": [], "categories": {}};
      let categoryCounter = 0;

      const getCategoryId = (categoryName) => {
        // Find existing category (case-insensitive)
        for (let id in data.categories) {
          if (data.categories[id].toLowerCase() === categoryName.toLowerCase()) {
            return parseInt(id);
          }
        }
        
        // Add new category
        const formattedName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase();
        data.categories[categoryCounter] = formattedName;
        return categoryCounter++;
      };

      const parseIsVeg = (isVeg) => {

        console.log(isVeg);
        if (typeof isVeg !== 'string') {
          return null;
        }
        if (isVeg.toLowerCase() === 'false') {
          return false;
        }

        if (isVeg.toLowerCase() === 'true') {
        return true;
      }

    return null;
      };

      data["items"] = response.data.values.slice(1).map(x => ({
        "id": parseInt(x[0]), 
        "title": x[1], 
        "cost": x[2], 
        "category": getCategoryId(x[3]),
        "isVeg": parseIsVeg(x[4])
      }));

      console.log(data);
      this.setState({ menuData: data, loading: false });
    } catch (error) {
      console.error('Error fetching menu data:', error);
      this.setState({ loading: false });
    }
  }


  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  handleVegFilterChange = (filterType) => {
    this.setState({ vegFilter: filterType });
  }

  handleCategorySelect = (categoryId) => {
    this.setState({ 
      selectedCategory: this.state.selectedCategory === categoryId ? null : categoryId 
    });
  }

  getFilteredItems = () => {
    const { searchTerm, vegFilter, selectedCategory } = this.state;
    
    return this.state.menuData.items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesVegFilter = vegFilter === 'all' || 
                              (vegFilter === 'veg' && item.isVeg) || 
                              (vegFilter === 'non-veg' && !item.isVeg);
      const matchesCategory = !selectedCategory || item.category === selectedCategory;
      return matchesSearch && matchesVegFilter && matchesCategory;
    });
  }

  groupItemsByCategory = (items) => {
    const grouped = {};
    items.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    return grouped;
  }

  render() {
    if (this.state.loading) {
      return <div>Loading menu...</div>;
    }


    const filteredItems = this.getFilteredItems();
    const groupedItems = this.groupItemsByCategory(filteredItems);
    const hasResults = filteredItems.length > 0;

    return (
      <div>
        <Navbar/>
        <div className="menu">
          <div className="menu-header">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search menu items..."
                value={this.state.searchTerm}
                onChange={this.handleSearchChange}
              />
            </div>
            <div className="filter-container">
              <div className="veg-filter">
                <button 
                  className={`veg-option ${this.state.vegFilter === 'all' ? 'active' : ''}`}
                  onClick={() => this.handleVegFilterChange('all')}
                >
                  All
                </button>
                <button 
                  className={`veg-option ${this.state.vegFilter === 'veg' ? 'active' : ''}`}
                  onClick={() => this.handleVegFilterChange('veg')}
                >
                  Veg
                </button>
                <button 
                  className={`veg-option ${this.state.vegFilter === 'non-veg' ? 'active' : ''}`}
                  onClick={() => this.handleVegFilterChange('non-veg')}
                >
                  Non-Veg
                </button>
              </div>
            </div>
          </div>

          <div className="category-filter-bar">
            <div className="category-chips">
              <button 
                className={`category-chip ${this.state.selectedCategory === null ? 'active' : ''}`}
                onClick={() => this.handleCategorySelect(null)}
              >
                All
              </button>
              {Object.entries(this.state.menuData.categories).map(([categoryId, categoryName]) => (
                <button
                  key={categoryId}
                  className={`category-chip ${this.state.selectedCategory === parseInt(categoryId) ? 'active' : ''}`}
                  onClick={() => this.handleCategorySelect(parseInt(categoryId))}
                >
                  {categoryName}
                </button>
              ))}
            </div>
          </div>

          {/* New scrollable content wrapper */}
          <div className="menu-content">
            {hasResults ? (
              Object.keys(groupedItems).map(categoryId => (
                <div key={categoryId} className="category-section">
                  <h2 className="category-heading">
                    {this.state.menuData.categories[categoryId]}
                  </h2>
                  <div className="menu-items">
                    {groupedItems[categoryId].map(item => (
                      <MobileMenuItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                No items found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
