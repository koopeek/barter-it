import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  CLEAR_ERROR_MESSAGE
} from './authActionTypes';

const initialState = {
  loading: false,
  isLogged: localStorage.getItem('token') ? true : false,
  errorMessage: ''
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
        isLogged: false,
        errorMessage: ''
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        isLogged: true,
        errorMessage: ''
      };
    case USER_LOGIN_FAILURE:
      return {
        loading: false,
        isLogged: false,
        errorMessage: action.payload
      };
    case USER_LOGOUT_SUCCESS:
      return {
        loading: false,
        isLogged: false,
        errorMessage: ''
      };
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
        isLogged: false,
        errorMessage: ''
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        isLogged: true,
        errorMessage: ''
      };
    case USER_REGISTER_FAILURE:
      return {
        loading: false,
        isLogged: false,
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
