import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const {store, actions} = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Rick&Morty</span>
      </Link>
      <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              favourites
            </button>
            <ul className="dropdown-menu ">
              {store.favorites.length > 0 ? (
                <>
                  {store.favorites.map((fav) => {
                    return (
                      <li key={fav} className="d-flex">
                        <p className="">{fav}</p>
                        <button
                          onClick={() => {
                            actions.setFavorites(fav);
                          }}
                        >
                          x
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
  );
};
