import { useContext, createContext, useReducer, useState } from "react";
import reducer from "./reducer";
// using global context to manage state in our application using context api and use reducer
const GlobalContext = createContext();
const AppContext = ({ children }) => {
  const initialState = {
    isLoading: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("tim");
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => useContext(GlobalContext);
export default AppContext;
