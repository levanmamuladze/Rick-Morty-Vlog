import React, { useContext } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 container">
      <h1>Characters</h1>
      <div className="d-flex overflow-auto flex-nowrap">
        {store.characters.map((character) => {
          return (
            <Card key={character.id} item={character} cardType="character" />
          );
        })}
      </div>
      <h1>Episodes</h1>
      <div className="d-flex overflow-auto flex-nowrap">
        {store.episodes.map((episode) => {
          return <Card key={episode.id} item={episode} cardType="episode" />;
        })}
      </div>
      <h1>Locations</h1>
      <div className="d-flex overflow-auto flex-nowrap">
        {store.locations.map((location) => {
          return <Card key={location.id} item={location} cardType="location" />;
        })}
      </div>
    </div>
  );
};
