// action types
export const LOGIN_ACTION = 'LOGIN_ACTION';

export const userInfoAction = (userInfo) => {
  return {
    type: LOGIN_ACTION,
    isGuest: false,
    isLogin: true,
    payload: {
      id: userInfo[0].id,
      userId: userInfo[0].userId,
      userNickName: userInfo[0].userNickName,
      userImage: userInfo[0].userImage
    }
  };
};
