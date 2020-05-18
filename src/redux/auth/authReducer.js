import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  CLEAR_ERROR_MESSAGE
} from './authActionTypes';

const initialState = {
  loading: false,
  isAuthenticated: localStorage.getItem('token') ? true : false,
  errorMessage: ''
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
        errorMessage: ''
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        errorMessage: ''
      };
    case USER_LOGIN_FAILURE:
      return {
        loading: false,
        isAuthenticated: false,
        errorMessage: action.payload
      };
    case USER_LOGOUT:
      return {
        loading: false,
        isAuthenticated: false,
        errorMessage: ''
      };
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
        errorMessage: ''
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        errorMessage: ''
      };
    case USER_REGISTER_FAILURE:
      return {
        loading: false,
        isAuthenticated: false,
        errorMessage: action.payload
      };
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: ''
      };
    default:
      return state;
  }
};

export default auth;
