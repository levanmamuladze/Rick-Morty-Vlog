import React, { useContext, useState } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import "/workspaces/Rick-Morty-Vlog/src/styles/index.css";



export const Home = () => {
  const { store, actions } = useContext(Context);
  const [selectedFilter, setSelectedFilter] = useState("characters");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const cardTypeMap = {
    characters: "character",
    episodes: "episode",
    locations: "location",
  };

  return (
    <div className="text-center  container-fluid main">
     <div className="btn-group ">
  <button
    className={`btn ${selectedFilter === "characters" ? "active text-decoration-underline" : ""} no-box-shadow `}
    onClick={() => handleFilterChange("characters")}
    tabIndex="-1"
  >
    Characters
  </button>
  <button
    className={`btn ${selectedFilter === "episodes" ? "active text-decoration-underline" : ""} no-box-shadow `}
    onClick={() => handleFilterChange("episodes")}
    tabIndex="-1"
  >
    Episodes
  </button>
  <button
    className={`btn ${selectedFilter === "locations" ? "active text-decoration-underline" : ""} no-box-shadow`}
    onClick={() => handleFilterChange("locations")}
    tabIndex="-1"
  >
    Locations
  </button>
</div>


      <h1 className="mt-5 mb-3 ">{selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)}</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {store[selectedFilter].map((item) => {
            return (
              <div key={item.id}>
                <Card item={item} cardType={cardTypeMap[selectedFilter]} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

