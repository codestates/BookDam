import React, { useState } from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './TextLimitNoticeModalStyle';

export const TextLimitNoticeModal = ({ errorMessage, handleCloseNoticeModal }) => {
  return (
    <>
      <NoticeModalBackground onClick={handleCloseNoticeModal}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>{errorMessage}</div>
          <Button onClick={handleCloseNoticeModal}>닫기</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
