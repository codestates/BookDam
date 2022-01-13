// action types
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGOUT_ACTION = 'LOGIUT_ACTION';
export const GUEST_LOGIN_ACTION = 'GUEST_LOGIN_ACTION';

export const GuestLoginAction = (userInfo) => {
  return {
    type: GUEST_LOGIN_ACTION,
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

export const LoginAction = (userInfo) => {
  return {
    type: LOGIN_ACTION,
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
    isLogin: false,
    payload: {
      userInfo: {
        id: '',
        userId: '',
        userNickName: 'passenger',
        userImage: ''
      }
    }
  };
};
