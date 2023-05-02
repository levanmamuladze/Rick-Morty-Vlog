import React, { useContext, useState } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import Select from "react-select";
import "/workspaces/Rick-Morty-Vlog/src/styles/index.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [selectedFilter, setSelectedFilter] = useState("characters");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const handleSearchQueryChange = (inputValue) => {
    setSearchQuery(inputValue);
  
    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  
    setSelectedOption(filteredOptions.length ? filteredOptions[0] : null);
  };
  
  const selectedValue = selectedOption?.value || '';
  

  const handleOptionSelected = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSearchQuery(selectedOption.label);
  };

  const cardTypeMap = {
    characters: "character",
    episodes: "episode",
    locations: "location",
  };

  const options = store[selectedFilter].map((item) => ({
    value: item.name,
    label: item.name,
  }));

  return (
    <div className="container main">
      <div className="d-flex flex-column flex-sm-row">
        <div className="btn-group text-start">
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
        <div className="input-group my-3 justify-content-end">
        <Select
          className="react-select-container"
          classNamePrefix="react-select"
          options={options}
          value={selectedOption}
          onInputChange={handleSearchQueryChange}
          onChange={handleOptionSelected}
          placeholder={searchQuery === "" ? `Search` : ""}
        />
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
