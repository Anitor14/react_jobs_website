import React, { useState, useReducer, useContext } from "react";

// this is the initial state.
export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// make sure use.
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
