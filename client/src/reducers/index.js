import { combineReducers } from 'redux';
import testReducer from './testReducer';
import articleReducer from './articleReducer';

const rootReducer = combineReducers({
  testReducer,
  articleReducer
});

export default rootReducer;
