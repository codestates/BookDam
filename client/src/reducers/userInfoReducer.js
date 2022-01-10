import { LOGIN_ACTION, LOGOUT_ACTION } from '../actions/UserInfoAction';
import { initialState } from './initialState';

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        isGuest: action.isGuest,
        isLogin: action.isLogin,
        userInfo: action.payload.userInfo
      };

    case LOGOUT_ACTION:
      return {
        ...state,
        isGuest: action.isGuest,
        isLogin: action.isLogin,
        userInfo: action.payload.userInfo
      };

    default:
      return state;
  }
};

export default userInfoReducer;
