import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Rick&Morty</span>
      </Link>
      <div className="ml-auto">
      <div className="dropdown dropstart">
  <button
    className="btn btn-danger dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Favorites {store.favorites.length > 0 ? `(${store.favorites.length})` : ""}
  </button>
  <ul className="dropdown-menu">
    {store.favorites.length > 0 ? (
      <>
        {store.favorites.map((fav) => {
          return (
            <li key={fav} className="d-flex justify-content-between">
            <p className="text-decoration-underline">{fav}</p>
            <button
              className="ml-auto bg-danger"
              onClick={(event) => {
                event.stopPropagation(); 
                actions.setFavorites(fav);
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </li>
          
          );
        })}
      </>
    ) : (
      <li>
        <p className="dropdown-item">Add favorites</p>
      </li>
    )}
  </ul>



        </div>
      </div>
    </nav>
    </div>
  );
};

