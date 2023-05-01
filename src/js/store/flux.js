const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      locations: [],
      episodes: [],
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
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
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      
        if (!favorites.includes(newFav)) {
          favorites.push(newFav);
        } else {
          favorites.splice(favorites.indexOf(newFav), 1);
        }
      
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setStore({ favorites });
      
      },
    },
  };
};

export default getState;
