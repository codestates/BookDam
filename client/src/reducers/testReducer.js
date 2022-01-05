import { LOGIN_ACTION } from '../actions/LoginAction';
import { initialState } from './initialState';

const testReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_ACTION:
      return {...state, isLogin: action.isLogin, userInfo: action.payload};
    
    default:
      return state;
  }
};

export default testReducer;
