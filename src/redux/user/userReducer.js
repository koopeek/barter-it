import { CREATE_NEW_ITEM_SUCCESS } from './userActionTypes';

const initialState = {
  email: '',
  id: '',
  items: []
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_ITEM_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};

export default user;
