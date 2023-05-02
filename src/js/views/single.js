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
