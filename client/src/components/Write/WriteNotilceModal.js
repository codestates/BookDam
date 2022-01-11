import Axios from 'axios';
import React, { useState } from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './WriteNoticeModalStyle';

export const WriteNoticeModal = ({ handleCloseNoticeModal }) => {
  return (
    <>
      <NoticeModalBackground onClick={handleCloseNoticeModal}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>내용을 입력하세요.</div>
          <Button onClick={handleCloseNoticeModal}>닫기</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
