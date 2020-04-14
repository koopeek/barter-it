import { SIGN_IN_SUCCESS, CREATE_NEW_ITEM_SUCCESS } from './userActionTypes';

export const authUser = credentials => {
  return async dispatch => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    await fetch(`http://barter-it-api.herokuapp.com/login`, {
      method: 'POST',
      // mode: 'cors',
      body: JSON.stringify(credentials),
      headers: headers
    })
      .then(response => response.json())
      .then(response => {
        localStorage.setItem('token', response.token);
        dispatch(signInSuccess(response));
        window.location.pathname = '/';
      })
      .catch(err => console.log(err));
  };
};

export const createNewItem = item => {
  return async dispatch => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    await fetch(`http://barter-it-api.herokuapp.com/items`, {
      method: 'GET',
      // mode: 'no-cors',
      //body: JSON.stringify(item),
      headers: headers
      //credentials: 'include'
    })
      .then(res => res.json())
      .then(res => dispatch(createItemSuccess(res)))
      .catch(err => console.log(err));
  };
};

export const createItemSuccess = item => {
  return {
    type: CREATE_NEW_ITEM_SUCCESS,
    payload: item
  };
};

export const signInSuccess = user => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: user
  };
};
