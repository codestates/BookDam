import React from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './SignoutNoticeModalStyle';

export const SignoutNoticeModal = ({ signOutHandler, openSignoutNoticelHandler }) => {
  return (
    <>
      <NoticeModalBackground onClick={openSignoutNoticelHandler}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>다음에 또 만나요!</div>
          <Button onClick={signOutHandler}>닫기</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
