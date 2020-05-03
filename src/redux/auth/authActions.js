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

export const loginUser = (credentials, history) => {
  return async dispatch => {
    dispatch(loginRequest());
    await fetch(`https://barter-it-api.herokuapp.com/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        const { token } = res;
        if (token) {
          localStorage.setItem('token', token);
          dispatch(loginSuccess());
          history.push('/');
        } else {
          dispatch(loginFailure('Nieprawidłowy adres e-mail lub hasło'));
        }
      })
      .catch(err => dispatch(loginFailure('Wystąpił nieoczekiwany błąd')));
  };
};

export const loginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST
  };
};

export const loginSuccess = () => {
  return {
    type: USER_LOGIN_SUCCESS
  };
};

export const loginFailure = errorMessage => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: errorMessage
  };
};

export const logoutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS
  };
};

export const registerRequest = () => {
  return {
    type: USER_REGISTER_REQUEST
  };
};

export const registerSuccess = () => {
  return {
    type: USER_REGISTER_SUCCESS
  };
};

export const registerFailure = errorMessage => {
  return {
    type: USER_REGISTER_FAILURE,
    payload: errorMessage
  };
};

export const clearErrorMessage = () => {
  return {
    type: CLEAR_ERROR_MESSAGE
  };
};
