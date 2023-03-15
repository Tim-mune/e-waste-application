import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER,
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
      registerUserText: "User registered... redirecting",
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
    return { ...state, isLoading: false };
  }

  if (action.type == LOGOUT_USER) {
    return { ...state, user: null };
  }
};
export default reducer;
