const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      locations: [],
      episodes: [],
      favorites: [],
    },
    actions: {
      getAllCharacters: async () => {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setStore({ characters: data.results });
      },

      getAllEpisodes: async () => {
        const response = await fetch("https://rickandmortyapi.com/api/episode");
        const data = await response.json();
        setStore({ episodes: data.results });
      },

      getAllLocations: async () => {
        const response = await fetch(
          "https://rickandmortyapi.com/api/location"
        );
        const data = await response.json();
        setStore({ locations: data.results });
      },
      setFavorites: (newFav) => {
        const favorites = getStore().favorites;
        if (!favorites.includes(newFav)) {
          setStore({ favorites: [...favorites, newFav] });
        } else {
          setStore({
            favorites: favorites.filter((oldFav) => oldFav != newFav),
          });
        }
      },
    },
  };
};

export default getState;
