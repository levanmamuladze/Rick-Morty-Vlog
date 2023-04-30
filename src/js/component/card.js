import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ item, cardType }) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="col">
      <div className="card mx-2" style={{ width: "15rem" }}>
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.gender}</p>
          <p className="card-text">{item.status}</p>
          <p className="card-text">{item.species}</p>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-danger"
              onClick={() => {
                actions.setFavorites(item.name);
              }}
            >
              x
            </button>
            <Link to={"/single/" + cardType + "/" + item.id}>
              <button className="btn btn-primary">More info</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
