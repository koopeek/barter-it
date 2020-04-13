import { combineReducers } from 'redux';
import user from './user/userReducer';

const rootReducer = combineReducers({ user });

export default rootReducer;
