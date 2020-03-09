import { combineReducers } from 'redux';
import product from './product';
import user from './user';

const reducers = combineReducers({
  user,
  product
});

export default reducers;
