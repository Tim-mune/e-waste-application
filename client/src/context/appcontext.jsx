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
  COLLECTWASTE_ERROR,
  CLEAR_VALUES,
  ALL_WASTE_BEGIN,
  ALL_WASTE_SUCCESS,
  ALL_WASTE_ERROR,
  SHOWSTATS_BEGIN,
  SHOWSTATS_SUCCESS,
  SHOWSTATS_ERROR,
  UPDATEUSER_BEGIN,
  UPDATEUSER_SUCCESS,
  UPDATE_USER_ERROR,
  DELETEUSER_BEGIN,
  DELETEUSER_SUCCESS,
  DELETEUSER_ERROR,
  DELETEWASTE_BEGIN,
  DELETEWASTE_ERROR,
  DELETEWASTE_SUCCESS,
} from "./actions";
import { useParams } from "react-router-dom";
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
    totalWastes: 0,
    wastes: [],
    pages: 0,
    disposedWastes: 0,
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
        type: COLLECTWASTE_ERROR,
        payload: { msg: error.response.data.msg },
      });
      console.log(error);
    }
  };

  const updateUser = async (data) => {
    try {
      const res = await axios.patch("/api/v1//auth/update", data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllWastes = async (page) => {
    // const { page } = useParams();
    dispatch({ type: ALL_WASTE_BEGIN });
    try {
      const res = await axios(`/api/v1/wastes/getwastes`);
      const data = res.data;
      dispatch({
        type: ALL_WASTE_SUCCESS,
        payload: {
          wastes: data.wastes,
          pages: data.numPages,
          total: data.totalWastes,
        },
      });
    } catch (error) {
      dispatch({
        type: ALL_WASTE_ERROR,
        payload: { msg: error.response.data.msg },
      });
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
    } catch (error) {
      dispatch({ type: SHOWSTATS_ERROR });
    }
  };
  const resetValues = async () => {
    dispatch({ type: CLEAR_VALUES });
  };
  const deleteWaste = async (req, res) => {};
  const deleteUser = async (req, res) => {};
  const createPages = (totalitems, itemsperpage) => {
    const totalPages = Math.ceil(totalitems / itemsperpage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
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
        createPages,
        deleteWaste,
        deleteUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => useContext(GlobalContext);
export default AppContext;
