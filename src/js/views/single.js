import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    getSingleItem();
  }, []);

  const getSingleItem = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/" + params.thetype + "/" + params.theid
    );
    const data = await response.json();
    setItem(data);
  };

  let content=''
  if (params.thetype === "character") {
    content = (
      <div className="row">
        <div className="col">
          <img src={item.image} />
        </div>
        <div className="col">
          <h2>{item.name}</h2>
          <p>Status: {item.status}</p>
          <p>Species: {item.species}</p>
          <p>Type: {item.type}</p>
          <p>Gender: {item.gender}</p>
        </div>
      </div>
    );
  } else if (params.thetype === "episode") {
    content = (
      <div>
        <h2>{item.name}</h2>
        <p>Air date: {item.air_date}</p>
        <p>Episode: {item.episode}</p>
      </div>
    );
  } else if (params.thetype === "location") {
    content = (
      <div>
        <h2>{item.name}</h2>
        <p>Type: {item.type}</p>
        <p>Dimension: {item.dimension}</p>
      </div>
    );
  }

  return (
    <div className="jumbotron">
      {content}

      <Link to="/">
        <span className="btn btn-primary btn-lg" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};
