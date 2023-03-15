import { useContext, createContext, useReducer, useState } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from "./actions";
// using global context to manage state in our application using context api and use reducer
const GlobalContext = createContext();
const AppContext = ({ children }) => {
  const initialState = {
    isLoading: false,
    user: null,
    displayText: "",
    registerUserText: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const res = await axios.post("/api/v1/auth/register", currentUser);
      const { user } = res.data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user } });
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR });
    }
  };
  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const res = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token } = res.data;
      const data = await res.data;
      console.log(data);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token } });
    } catch (error) {
      console.log(error);
      dispatch({ type: LOGIN_USER_ERROR });
    }
  };

  const logOut = async () => {
    dispatch({ type: LOGOUT_USER });
  };
  return (
    <GlobalContext.Provider
      value={{ ...state, registerUser, loginUser, logOut }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => useContext(GlobalContext);
export default AppContext;
