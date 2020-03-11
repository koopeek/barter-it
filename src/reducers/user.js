const initialUserState = {
  isLogged: false
};

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return state;
    case 'SIGN_UP':
      return state;
    default:
      return state;
  }
};

export default user;
