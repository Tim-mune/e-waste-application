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
};
export default reducer;
