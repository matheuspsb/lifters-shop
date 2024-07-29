import React from "react";
import { categories, colors } from "../../constants/contants";
import "./FilterBar.css";

const FilterBar: React.FC = () => {
  return (
    <div className="filter-bar">
      <h5>Filters</h5>
      <div className="filter-bar-categories">
        <span>Categories</span>
        {categories.map((category) => (
          <div key={category} className="filter-item">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
      <div className="filter-bar-colors">
        <span>Color</span>
        <div className="colors-grid">
          {colors.map((color) => (
            <div key={color.name} className="color-item">
              <input
                type="checkbox"
                id={color.name}
                style={{ backgroundColor: color.hex }}
              />
              <label htmlFor={color.name}></label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { FilterBar };
