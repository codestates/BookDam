import { LOGIN_ACTION } from '../actions/userInfoAction';
import { initialState } from './initialState';

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        isGuest: action.isGuest,
        isLogin: action.isLogin,
        userInfo: action.payload
      };

    default:
      return state;
  }
};

export default userInfoReducer;
