import { SIGN_IN_SUCCESS, CREATE_NEW_ITEM_SUCCESS } from './userActionTypes';

export const authUser = credentials => {
  return async dispatch => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    await fetch(`${process.env.API_URL}/login`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(credentials),
      headers: headers
    })
      .then(response => response.text())
      .then(response => {
        localStorage.setItem('token', response);
        dispatch(signInSuccess());
        window.location.pathname = '/';
      })
      .catch(err => console.log(err));
  };
};

export const createNewUserItem = item => {
  return async dispatch => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    await fetch(`${process.env.API_URL}/items`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(item),
      headers: headers
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

export const signInSuccess = token => {
  return {
    type: SIGN_IN_SUCCESS
  };
};
