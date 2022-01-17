import React from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './IsGuestNoticeModalStyle';

export const IsGuestNoticeModal = ({ errorMessage, closeNoticeModal }) => {
  return (
    <>
      <NoticeModalBackground onClick={closeNoticeModal}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>{errorMessage}</div>
          <Button onClick={closeNoticeModal}>닫기</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
