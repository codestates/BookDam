import React, { useState } from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './SubmitConfirmModalStyle';

export const SubmitConfirmModal = ({ errorMessage, handleSubmit, handleCloseNoticeModal }) => {
  return (
    <>
      <NoticeModalBackground onClick={handleCloseNoticeModal}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>{errorMessage}</div>
          <Button onClick={handleSubmit}>확인</Button>
          <Button onClick={handleCloseNoticeModal}>취소</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
