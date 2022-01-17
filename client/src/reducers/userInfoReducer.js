import {
  GUEST_LOGIN_ACTION,
  LOGIN_ACTION,
  LOGOUT_ACTION,
  USERINFO_MODIFY_ACTION
} from '../actions/UserInfoAction';
import { initialState } from './initialState';

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUEST_LOGIN_ACTION:
      return {
        ...state,
        userInfo: action.payload.userInfo
      };

    case LOGIN_ACTION:
      return {
        ...state,
        isLogin: action.isLogin,
        userInfo: action.payload.userInfo
      };

    case LOGOUT_ACTION:
      return {
        ...state,
        isLogin: action.isLogin,
        userInfo: action.payload.userInfo
      };

    case USERINFO_MODIFY_ACTION:
      return {
        ...state,
        userInfo: action.payload.userInfo
      };

    default:
      return state;
  }
};

export default userInfoReducer;
