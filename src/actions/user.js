const addNewItem = item => {
  return {
    type: 'ADD_NEW_ITEM_TO_USER_ITEMS',
    payload: item
  };
};

export { addNewItem };
