import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rickandmortyicon18 from "/workspaces/Rick-Morty-Vlog/src/img/rick-and-morty-icon-18.jpg";
import "/workspaces/Rick-Morty-Vlog/src/styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 ">
          <img className="ioulios" src={rickandmortyicon18} alt="Rick and Morty Icon" /></span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse pe-2" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <div className="dropdown ">
              <button
                className="btn btn-danger dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites{" "}
                {store.favorites.length > 0 ? `(${store.favorites.length})` : ""}
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                {store.favorites.length > 0 ? (
                  <>
                    {store.favorites.map((fav) => {
                      return (
                        <li
                          key={fav}
                          className="d-flex justify-content-between dropdown-item"
                        >
                          <p className="text-decoration-underline">{fav}</p>
                          <button
                            
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
        </div>
      </div>
    </nav>
  );
};
