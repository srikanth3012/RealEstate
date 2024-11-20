import React, { useEffect, useRef, useState } from "react";
import "./SearchBar.scss";
const types = ["Buy", "Rent"];

const cache = ["Austrailia", "London", "Oman", "Ladak"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  useEffect(() => {
    if (query?.location) {
      const intervalId = setTimeout(() => {
        console.log("throt");
      }, 1000);

      return () => {
        clearTimeout(intervalId);
      };
    }
  }, [query?.location]);

  const queryHandler = (e) => {
    if (e.target.name === "location") {
      const cacheResult = cache.filter((item) => item.includes(e.target.value));
      if (cacheResult.length > 0) console.log(cacheResult);
      else setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const typeHandler = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchbar">
      {" "}
      <div className="type">
        {types?.map((type) => (
          <button
            key={type}
            className={query?.type == type ? "active" : ""}
            onClick={() => typeHandler(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="location"
          placeholder="City Location"
          onChange={queryHandler}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
          onChange={queryHandler}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
