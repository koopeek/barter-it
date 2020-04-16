import { combineReducers } from 'redux';
import user from './user/userReducer';
import auth from './auth/authReducer';

const rootReducer = combineReducers({ user, auth });

export default rootReducer;
