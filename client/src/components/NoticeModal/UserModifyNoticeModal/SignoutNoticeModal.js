import React from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './SignoutNoticeModalStyle';

export const SignoutNoticeModal = ({ errorMessage, signoutNoticeModalHandler }) => {
  return (
    <>
      <NoticeModalBackground onClick={signoutNoticeModalHandler}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>{errorMessage}</div>
          <Button onClick={signoutNoticeModalHandler}>닫기</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
