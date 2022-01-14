import React from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './IsGuestNoticeModalStyle';

export const IsGuestNoticeModal = ({ errorMessage, isGuestNoticeModalHandler }) => {
  return (
    <>
      <NoticeModalBackground onClick={isGuestNoticeModalHandler}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>{errorMessage}</div>
          <Button onClick={isGuestNoticeModalHandler}>닫기</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
