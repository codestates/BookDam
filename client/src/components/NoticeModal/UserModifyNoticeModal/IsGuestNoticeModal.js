import React from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './IsGuestNoticeModalStyle';

export const IsGuestNoticeModal = ({ errorMessage, userInfoModifyBtnHandler }) => {

  return (
    <>
      <NoticeModalBackground onClick={userInfoModifyBtnHandler}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>{errorMessage}</div>
          <Button onClick={userInfoModifyBtnHandler}>닫기</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
