import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE
} from './authActionTypes';

const initialState = {
  isLogged: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      console.log('User login success');
      return state;
    case USER_LOGIN_FAILURE:
      console.log('User login failure');
      return state;
    case USER_LOGOUT_SUCCESS:
      console.log('User logout success');
      return state;
    case USER_REGISTER_SUCCESS:
      console.log('User register success');
      return state;
    case USER_REGISTER_FAILURE:
      console.log('User register failure');
      return state;
    default:
      return state;
  }
};

export default auth;
