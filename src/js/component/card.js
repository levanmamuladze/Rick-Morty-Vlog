import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "/workspaces/Rick-Morty-Vlog/src/styles/card.css";

export const Card = ({ item, cardType }) => {
  const { store, actions } = useContext(Context);

  const handleSetFavorites = () => {
    actions.setFavorites(item.name);
  };

  return (
    <div className="card mx-2 shadow border  rounded">
      {cardType === "character" && (
        <img src={item.image} className="card-img-top" alt={item.name} />
      )}
      <div className="card-body">
  <h5 className="card-title ">{item.name}</h5>
  {cardType === "character" && (
    <div className="card-text no-box-shadow">
      <p>Species: {item.species}</p>
      <p>Gender: {item.gender}</p>
    </div>
  )}
  {cardType === "location" && (
    <div className="card-text no-box-shadow">
      <p>Type: {item.type}</p>
      <p>Dimension: {item.dimension}</p>
    </div>
  )}
  {cardType === "episode" && (
    <div className="card-text no-box-shadow">
      <p>Episode: {item.episode}</p>
    </div>
  )}
</div>
<div className="card-footer d-flex justify-content-between">
  <Link to={`/single/${cardType}/${item.id}`} className="btn btn-primary">
  <i class="fa-solid fa-info"></i>
  </Link>
  <button className="btn btn-danger" onClick={handleSetFavorites}>
  <i class="fa-solid fa-heart"></i>
  </button>
</div>

</div>

  );
};
