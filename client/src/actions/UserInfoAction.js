// action types
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGOUT_ACTION = 'LOGIUT_ACTION';

export const LoginAction = (userInfo) => {
  return {
    type: LOGIN_ACTION,
    isGuest: false,
    isLogin: true,
    payload: {
      userInfo: {
        id: userInfo.id,
        userId: userInfo.userId,
        userNickName: userInfo.userNickName,
        userImage: userInfo.userImage
      }
    }
  };
};

export const LogoutAction = (userInfo) => {
  console.log(userInfo);
  return {
    type: LOGOUT_ACTION,
    isGuest: true,
    isLogin: false,
    payload: {
      userInfo: {
        id: '',
        userId: '',
        userNickName: '게스트',
        userImage: ''
      }
    }
  };
};
