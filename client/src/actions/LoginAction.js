// action types
export const LOGIN_ACTION = 'LOGIN_ACTION';

export const LoginAction = ({ LoginUserInfo }) => {
  return {
    type: LOGIN_ACTION,
    payload: {
      userInfo: {}
    }
  };
};
