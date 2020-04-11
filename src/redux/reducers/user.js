const initialUserState = {
  items: [],
  isLogged: false
};

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case 'ADD_NEW_ITEM_TO_USER_ITEMS':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};

export default user;
