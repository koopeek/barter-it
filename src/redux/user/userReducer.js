import { SIGN_IN_SUCCESS, CREATE_NEW_ITEM_SUCCESS } from './userActionTypes';

const initialState = {
  isLogged: localStorage.getItem('token') ? true : false,
  email: '',
  items: []
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLogged: true
      };
    case CREATE_NEW_ITEM_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      console.log('default');
      return state;
  }
};

export default user;
