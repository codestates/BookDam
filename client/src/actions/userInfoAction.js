// action types
export const LOGIN_ACTION = 'LOGIN_ACTION';

export const UserInfoAction = ({ LoginUserInfo }) => {
  return {
    type: LOGIN_ACTION,
    payload: {
      userInfo: {}
    }
  };
};
