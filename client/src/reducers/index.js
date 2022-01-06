import { combineReducers } from 'redux';
import userInfoReducer from './userInfoReducer';
import articleReducer from './articleReducer';

const rootReducer = combineReducers({
  userInfoReducer,
  articleReducer
});

export default rootReducer;
