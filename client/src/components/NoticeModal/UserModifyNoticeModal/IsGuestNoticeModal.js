import React from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './IsGuestNoticeModalStyle';

export const IsGuestNoticeModal = ({ errorMessage, setIsOpenNoticeModal }) => {
  return (
    <>
      <NoticeModalBackground onClick={setIsOpenNoticeModal}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>{errorMessage}</div>
          <Button onClick={setIsOpenNoticeModal}>닫기</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
