import React, { useContext, useState } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import "/workspaces/Rick-Morty-Vlog/src/styles/index.css";
import "/workspaces/Rick-Morty-Vlog/src/styles/index.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [selectedFilter, setSelectedFilter] = useState("characters");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const cardTypeMap = {
    characters: "character",
    episodes: "episode",
    locations: "location",
  };

  const filteredItems = store[selectedFilter].filter((item) => {
    const fieldsToSearch = ['name'];
    
    return fieldsToSearch.some((field) =>
      item[field].toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="container main">
     <div className="d-flex flex-column flex-sm-row">
  <div className="btn-group text-start">
    <button
      className={`btn ${
        selectedFilter === "characters" ? "active text-decoration-underline" : ""
      } no-box-shadow`}
      onClick={() => handleFilterChange("characters")}
      tabIndex="-1"
    >
      Characters
    </button>
    <button
      className={`btn ${
        selectedFilter === "episodes" ? "active text-decoration-underline" : ""
      } no-box-shadow`}
      onClick={() => handleFilterChange("episodes")}
      tabIndex="-1"
    >
      Episodes
    </button>
    <button
      className={`btn ${
        selectedFilter === "locations" ? "active text-decoration-underline" : ""
      } no-box-shadow`}
      onClick={() => handleFilterChange("locations")}
      tabIndex="-1"
    >
      Locations
    </button>
  </div>
  <div className="input-group my-3 justify-content-end">
    <div className="form-floating">
      <input
        type="text"
        className="form-control no-box-shadow"
        placeholder="Type the name you want to find"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <label htmlFor="search-input">Search Name</label>
    </div>
  </div>
</div>


        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {filteredItems.map((item) => {
            return (
              <div key={item.id}>
                <Card item={item} cardType={cardTypeMap[selectedFilter]} />
              </div>
            );
          })}
        </div>
      </div>
   
  );
};
