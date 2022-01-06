import { LOGIN_ACTION } from '../actions/loginAction';
import { initialState } from './initialState';

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, isGuest: action.isGuest, isLogin: action.isLogin, userInfo: action.payload };

    default:
      return state;
  }
};

export default loginReducer;
