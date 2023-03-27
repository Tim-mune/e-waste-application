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
  SHOW_MODAL,
  COLLECTWASTE_BEGIN,
  COLLECTWASTE_SUCCESS,
  CREATEWASTE_ERROR,
  CLEAR_VALUES,
  ALL_WASTE_BEGIN,
  ALL_WASTE_SUCCESS,
  ALL_WASTE_ERROR,
  SHOWSTATS_BEGIN,
  SHOWSTATS_SUCCESS,
  SHOWSTATS_ERROR,
} from "./actions";
// using global context to manage state in our application using context api and use reducer
const GlobalContext = createContext();
const AppContext = ({ children }) => {
  const initialState = {
    isLoading: false,
    user: null,
    displayText: "",
    modal: false,
    wasteCondition: ["working", "spoilt"],
    wasteType: ["Home-equipment", "Office-equipment", "other"],
    waste: null,
    totalWastes: [],
    disposedWasted: 0,
    refurbished: 0,
    stats: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const res = await axios.post("/api/v1/auth/register", currentUser);
      const { userClient } = res.data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user: userClient } });
      console.log(res);
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR });
    }
  };
  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const res = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token } = res.data;
      // const data = await res.data;
      // console.log(data);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token } });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const showModal = () => {
    dispatch({ type: SHOW_MODAL });
  };

  const logOut = async () => {
    dispatch({ type: LOGOUT_USER });
  };

  const createWaste = async (wasteObject) => {
    dispatch({ type: COLLECTWASTE_BEGIN });
    try {
      const res = await axios.post("/api/v1/wastes/waste", wasteObject);
      const { waste } = res.data;
      dispatch({ type: COLLECTWASTE_SUCCESS, payload: { waste } });
    } catch (error) {
      dispatch({
        type: CREATEWASTE_ERROR,
        payload: { msg: error.response.data.msg },
      });
      console.log(error);
    }
  };

  const updateUser = async () => {};

  const getAllWastes = async () => {
    dispatch({ type: ALL_WASTE_BEGIN });
    try {
      const res = await axios("/api/v1/wastes/getwastes");
      const data = res.data;
      dispatch({ type: ALL_WASTE_SUCCESS, payload: { wastes: data.wastes } });
      console.log(data);
    } catch (error) {
      dispatch({
        type: ALL_WASTE_ERROR,
        payload: { msg: error.response.data.msg },
      });
      console.log(error);
    }
  };

  const getStats = async () => {
    dispatch({ type: SHOWSTATS_BEGIN });
    try {
      const { data } = await axios("/api/v1/wastes/stats");

      dispatch({
        type: SHOWSTATS_SUCCESS,
        payload: {
          stats: data.monthlyWastes,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch({ type: SHOWSTATS_ERROR });
    }
  };

  const resetValues = async () => {
    dispatch({ type: CLEAR_VALUES });
  };
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        registerUser,
        loginUser,
        logOut,
        showModal,
        createWaste,
        resetValues,
        updateUser,
        getAllWastes,
        getStats,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => useContext(GlobalContext);
export default AppContext;
