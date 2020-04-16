import { CREATE_NEW_ITEM_SUCCESS } from './userActionTypes';

export const createNewItem = item => {
  return async dispatch => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    await fetch(`https://barter-it-api.herokuapp.com/items`, {
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

export const createItemSuccess = item => {
  return {
    type: CREATE_NEW_ITEM_SUCCESS,
    payload: item
  };
};
