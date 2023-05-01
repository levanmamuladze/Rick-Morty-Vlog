import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Rick&Morty</span>
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
        <div className="collapse navbar-collapse" id="navbarNav">
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
                            className="bg-danger"
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
