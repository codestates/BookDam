import React from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  SubmitConfirmButton
} from './SubmitConfirmModalStyle';

export const SubmitConfirmModal = ({ errorMessage, handleSubmit, handleCloseNoticeModal }) => {
  return (
    <>
      <NoticeModalBackground onClick={handleCloseNoticeModal}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>{errorMessage}</div>
          <SubmitConfirmButton onClick={handleSubmit}>확인</SubmitConfirmButton>
          <SubmitConfirmButton onClick={handleCloseNoticeModal}>취소</SubmitConfirmButton>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
