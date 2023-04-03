import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
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
  DELETEUSER_BEGIN,
  DELETEUSER_SUCCESS,
  DELETEUSER_ERROR,
  DELETEWASTE_ERROR,
  DELETEWASTE_BEGIN,
  DELETEWASTE_SUCCESS,
  // DELETEWASTE_BEGIN,
} from "./actions";
const reducer = (state, action) => {
  if (action.type == REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type == REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      displayText: "User registered... redirecting",
    };
  }
  if (action.type == REGISTER_USER_ERROR) {
    return { ...state, isLoading: false };
  }

  if (action.type == LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type == LOGIN_USER_SUCCESS) {
    return {
      ...state,
      loginUserText: "User registered... redirecting",
      user: action.payload.user,
      isLoading: false,
    };
  }
  if (action.type == LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      displayText: action.payload.msg,
    };
  }

  if (action.type == LOGOUT_USER) {
    return { ...state, user: null };
  }

  if (action.type == SHOW_MODAL) {
    return { ...state, modal: !state.modal };
  }

  if (action.type == COLLECTWASTE_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type == COLLECTWASTE_SUCCESS) {
    return { ...state, isLoading: false, waste: action.payload.waste };
  }
  if (action.type == COLLECTWASTE_ERROR) {
    return { ...state, isLoading: false, displayText: action.payload.msg };
  }

  if (action.type == ALL_WASTE_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type == ALL_WASTE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      wastes: action.payload.wastes,
      totalWastes: action.payload.total,
      pages: action.payload.pages,
    };
  }
  if (action.type == ALL_WASTE_ERROR) {
    return { ...state, isLoading: false, displayText: action.payload.msg };
  }

  if (action.type == SHOWSTATS_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type == SHOWSTATS_SUCCESS) {
    return { ...state, isLoading: false, stats: action.payload.stats };
  }
  if (action.type == SHOWSTATS_ERROR) {
    return { ...state, isLoading: false };
  }
};
export default reducer;
