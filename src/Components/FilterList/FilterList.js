import React from "react";
import "./FilterList.scss";

const FilterList = () => {
  return (
    <div className="filterList">
      <h1>
        Search result for <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label>Location</label>
          <input type="text" placeholder="City Location" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select id="type" name="type">
            <option value="any">any</option>
            <option value="Rent">Rent</option>
            <option value="Buy">Buy</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="Property">Property</label>
          <select id="Property" name="Property">
            <option value="">any</option>
            <option value="">Rent</option>
            <option value="">Buy</option>
          </select>
        </div>
        <div className="item">
          <label>Min Price</label>
          <input
            type="number"
            name="minPrice"
            min={0}
            max={1000000}
            placeholder="Any"
          />
        </div>
        <div className="item">
          <label>Max Price</label>
          <input
            type="number"
            name="maxPrice"
            min={0}
            max={1000000}
            placeholder="Any"
          />
        </div>
        <div className="item">
          <label>Bedroom</label>
          <input type="text" name="Bedroom" placeholder="Any" />
        </div>
        <button>
          <img src="./search.png" alt="search" />
        </button>
      </div>
    </div>
  );
};

export default FilterList;
