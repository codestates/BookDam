// action types
export const FOLLOWINFO_ACTION = 'FOLLOWINFO_ACTION';

export const FollowInfoAction = (followInfo) => {
  return {
    type: FOLLOWINFO_ACTION,
    payload: {
      userInfo: {
        id: followInfo.id,
        userId: followInfo.userId,
        userNickName: followInfo.userNickName,
        userImage: followInfo.userImage
      }
    }
  };
};
