import {
  CREATE_NEW_ITEM_REQUEST,
  CREATE_NEW_ITEM_SUCCESS,
  CREATE_NEW_ITEM_FAILURE
} from './userActionTypes';

export const createNewItem = item => {
  return async dispatch => {
    dispatch(createItemRequest());

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    await fetch(`https://barter-it-api.herokuapp.com/items/create`, {
      method: 'POST',
      body: JSON.stringify(item),
      mode: 'cors',
      headers: headers
    })
      .then(res => res.json())
      .then(res => dispatch(createItemSuccess(res)))
      .catch(err => console.log(err));
  };
};

export const getItems = () => {
  return async dispatch => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    await fetch(`https://barter-it-api.herokuapp.com/items/5ebae6eba09a52723582d259`, {
      method: 'GET',
      mode: 'cors',
      headers: headers
    })
      .then(res => res.json())
      //then(res => dispatch(createItemSuccess(res)))
      .catch(err => console.log(err));
  };
};

export const createItemRequest = item => {
  return {
    type: CREATE_NEW_ITEM_REQUEST,
    payload: item
  };
};

export const createItemSuccess = item => {
  return {
    type: CREATE_NEW_ITEM_SUCCESS,
    payload: item
  };
};

export const createItemFailure = errorMessage => {
  return {
    type: CREATE_NEW_ITEM_FAILURE,
    payload: errorMessage
  };
};
