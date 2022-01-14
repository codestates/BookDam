import React from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './UserModifyNoticeModalStyle';

export const UserModifyNoticeModal = ({ errorMessage, userModifyNoticeModalHandler }) => {
  return (
    <>
      <NoticeModalBackground onClick={userModifyNoticeModalHandler}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>{errorMessage}</div>
          <Button onClick={userModifyNoticeModalHandler}>닫기</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
