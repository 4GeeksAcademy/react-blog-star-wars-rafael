import React, { createContext, useReducer } from "react";

// 🧱 Estado inicial
const initialStore = {
  favorites: [],
};

// ⚙️ Reducer (controla las acciones)
const storeReducer = (state, action) => {
  switch (action.type) {
    case "add_favorite":
      if (state.favorites.includes(action.payload)) return state;
      return { ...state, favorites: [...state.favorites, action.payload] };

    case "remove_favorite":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav !== action.payload),
      };

    default:
      return state;
  }
};

// 🌍 Crear contexto global
export const Context = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore);

  // 🪄 Acciones globales
  const actions = {
    addFavorite: (item) => dispatch({ type: "add_favorite", payload: item }),
    removeFavorite: (item) =>
      dispatch({ type: "remove_favorite", payload: item }),
  };

  return (
    <Context.Provider value={{ store, actions }}>
      {children}
    </Context.Provider>
  );
};
