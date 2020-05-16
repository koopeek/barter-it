import {
  CREATE_NEW_ITEM_SUCCESS,
  CREATE_NEW_ITEM_REQUEST,
  CREATE_NEW_ITEM_FAILURE
} from './userActionTypes';

const initialState = {
  email: '',
  id: '',
  createItemLoading: false,
  createItemErrorMessage: '',
  items: []
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_ITEM_REQUEST:
      return {
        ...state,
        createItemLoading: true
      };
    case CREATE_NEW_ITEM_SUCCESS:
      return {
        ...state,
        createItemLoading: false,
        items: [...state.items, action.payload]
      };
    case CREATE_NEW_ITEM_FAILURE:
      return {
        ...state,
        createItemLoading: false,
        createItemErrorMessage: action.payload
      };
    default:
      return state;
  }
};

export default user;
