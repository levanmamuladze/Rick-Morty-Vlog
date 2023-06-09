import React, { useContext, useEffect, useState } from "react";
import { Card } from "../component/card"; // Importing a custom Card component
import { Context } from "../store/appContext"; // Importing a custom Context provider
import "/workspaces/Rick-Morty-Vlog/src/styles/index.css"; // Importing some CSS styles

export const Home = () => {
  const { store } = useContext(Context); // Getting the current store state using the Context provider
  const [selectedFilter, setSelectedFilter] = useState("characters"); // Setting the default filter to "characters"
  const [searchQuery, setSearchQuery] = useState(""); // Setting the default search query to an empty string
  const [selectedOption, setSelectedOption] = useState(null); // Setting the default selected option to null
  const [filteredItems, setFilteredItems] = useState([]); // Setting the default filtered items to an empty array

  useEffect(() => {
    setFilteredItems(store[selectedFilter]); // Update the filtered items whenever the selected filter changes or the store state changes
  }, [store[selectedFilter]]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter); // Update the selected filter when a new filter is clicked
  };
  const retrieveNewData = (data) => {
    const newData = store[selectedFilter].filter((item) =>
      item.name.toLowerCase().includes(data.toLowerCase()) // Filter the items based on the search query (case-insensitive)
    );
    setFilteredItems(newData); // Update the filtered items with the new data
  };
  const cardTypeMap = {
    characters: "character", // Map the "characters" filter to "character" card type
    episodes: "episode", // Map the "episodes" filter to "episode" card type
    locations: "location", // Map the "locations" filter to "location" card type
  };
  const filteredCards = searchQuery
    ? filteredItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) // Filter the items based on the search query (case-insensitive)
      )
    : filteredItems;
  return (
    <div className="container main">
      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between">
        <div className="btn-group text-start mb-3 mb-sm-0 ">
          <button
            className={`btn ${
              selectedFilter === "characters"
                ? "active text-decoration-underline"
                : ""
            } no-box-shadow`}
            onClick={() => handleFilterChange("characters")}
            tabIndex="-1"
          >
            Characters
          </button>
          <button
            className={`btn ${
              selectedFilter === "episodes"
                ? "active text-decoration-underline"
                : ""
            } no-box-shadow`}
            onClick={() => handleFilterChange("episodes")}
            tabIndex="-1"
          >
            Episodes
          </button>
          <button
            className={`btn ${
              selectedFilter === "locations"
                ? "active text-decoration-underline"
                : ""
            } no-box-shadow`}
            onClick={() => handleFilterChange("locations")}
            tabIndex="-1"
          >
            Locations
          </button>
        </div>
        <div className="input-group search-bar">
          <input
            type="text"
            className="form-control"
            placeholder={`Search ${selectedFilter}`}
            aria-label={`Search ${selectedFilter}`}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedOption(null);
              retrieveNewData(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 pt-3">
        {filteredCards.map((item) => (
          <div key={item.id}>
            <Card item={item} cardType={cardTypeMap[selectedFilter]} />
          </div>
        ))}
      </div>
    </div>
  );
};
