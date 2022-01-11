import { FOLLOWINFO_ACTION } from '../actions/FollowInfoAction';
import { initialState } from './initialState';

const followInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWINFO_ACTION:
      return {
        userInfo: action.payload.followInfo
      };

    default:
      return state;
  }
};

export default followInfoReducer;
