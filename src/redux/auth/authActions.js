import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE
} from './authActionTypes';

export const loginUser = credentials => {
  return async dispatch => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    await fetch(`https://barter-it-api.herokuapp.com/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: headers
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('token', res.token);
        dispatch(loginSuccess(res));
      })
      .catch(err => dispatch(loginFailure(err)));
  };
};

export const loginSuccess = () => {
  return {
    type: USER_LOGIN_SUCCESS
  };
};

export const loginFailure = () => {
  return {
    type: USER_LOGIN_FAILURE
  };
};

export const logoutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS
  };
};

export const registerSuccess = () => {
  return {
    type: USER_REGISTER_SUCCESS
  };
};

export const registerFailure = () => {
  return {
    type: USER_REGISTER_FAILURE
  };
};
