import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Define the Single component
export const Single = () => {

  // Retrieve the URL parameters using the useParams hook
  const params = useParams();

  // Set up a state variable to hold the item data
  const [item, setItem] = useState({});

  // Fetch the item data from the API when the component mounts
  useEffect(() => {
    getSingleItem();
  }, []);

  // Fetch the item data from the API
  const getSingleItem = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/" + params.thetype + "/" + params.theid
    );
    const data = await response.json();
    setItem(data);
  };

  // Define the content to display based on the type of item
  let content = "";
  if (params.thetype === "character") {
    content = (
      <div className="row justify-content-center shadow border p-3">
        <div className="col-12 col-md-6 text-center">
          <img src={item.image} className="img-fluid" />
        </div>
        <div className="col-12 col-md-6">
          <h2 className={`text-center text-md-start ${item.status === 'Dead' ? 'bg-danger' : item.status === 'Alive' ? 'bg-success' : 'bg-secondary'}`}>
            {item.status}
          </h2>
          <p className="text-center text-md-start">
            Name: {item.name}
          </p>
          <p className="text-center text-md-start">
            Species: {item.species}
          </p>
          {item.type && (
            <p className="text-center text-md-start">Type: {item.type}</p>
          )}
          <p className="text-center text-md-start">
            Gender: {item.gender}
          </p>
        </div>
      </div>
    );
  } else if (params.thetype === "episode") {
    content = (
      <div className="shadow border p-3">
        <h2>{item.name}</h2>
        <p>Air date: {item.air_date}</p>
        <p>Episode: {item.episode}</p>
      </div>
    );
  } else if (params.thetype === "location") {
    content = (
      <div className="shadow border p-3">
        <h2>{item.name}</h2>
        <p>Type: {item.type}</p>
        <p>Dimension: {item.dimension}</p>
      </div>
    );
  }

  // Return the JSX for the Single component
  return (
    <div className="d-flex flex-column align-items-center justify-content-center ">
      <div className=" d-flex flex-column mx-auto mb-3 ">
        {content}
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/">
          <button className="btn btn-primary btn-lg" role="button">
            Back home
          </button>
        </Link>
      </div>
    </div>
  );
};
