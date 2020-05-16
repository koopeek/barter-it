import {
  CREATE_NEW_ITEM_REQUEST,
  CREATE_NEW_ITEM_SUCCESS,
  CREATE_NEW_ITEM_FAILURE
} from './userActionTypes';
import ROUTES from '../../global/routes';

export const createNewItem = (item, history) => {
  return async dispatch => {
    dispatch(createItemRequest());

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

    await fetch(`https://barter-it-api.herokuapp.com/items/create`, {
      method: 'POST',
      body: JSON.stringify(item),
      mode: 'cors',
      headers
    })
      .then(res => res.json())
      .then(res => {
        dispatch(createItemSuccess(res));
        history.push(`${ROUTES.ITEM_VIEW}/${res.id}`);
      })
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
