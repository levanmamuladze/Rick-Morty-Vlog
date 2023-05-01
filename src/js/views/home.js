import React, { useContext, useState } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import "/workspaces/Rick-Morty-Vlog/src/styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [selectedFilter, setSelectedFilter] = useState("characters");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const cardTypeMap = {
    characters: "character",
    episodes: "episode",
    locations: "location"
  };

  return (
    <div className="text-center mt-5 container-fluid">
      <div className="btn-group">
        <button
          className={`btn ${selectedFilter === "characters" ? "active" : ""}`}
          onClick={() => handleFilterChange("characters")}
        >
          Characters
        </button>
        <button
          className={`btn  ${selectedFilter === "episodes" ? "active" : ""}`}
          onClick={() => handleFilterChange("episodes")}
        >
          Episodes
        </button>
        <button
          className={`btn  ${selectedFilter === "locations" ? "active" : ""}`}
          onClick={() => handleFilterChange("locations")}
        >
          Locations
        </button>
      </div>

      <h1>{selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)}</h1>
      <div className="container d-flex ">
        <div className="row">
          {store[selectedFilter].map((item) => {
            return (
              <div key={item.id} className="col-md-3 mb-3">
                <Card item={item} cardType={cardTypeMap[selectedFilter]} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
