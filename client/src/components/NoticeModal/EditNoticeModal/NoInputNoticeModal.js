import React from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  NoInputButton
} from './NoInputNoticeModalStyle';

export const NoInputNoticeModal = ({ errorMessage, handleCloseNoticeModal }) => {
  return (
    <>
      <NoticeModalBackground onClick={handleCloseNoticeModal}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>{errorMessage}</div>
          <NoInputButton onClick={handleCloseNoticeModal}>닫기</NoInputButton>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
