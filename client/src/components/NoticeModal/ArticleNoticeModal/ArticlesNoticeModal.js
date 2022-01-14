import React from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './ArticlesNoticeModalStyle';

export const ArticleNoticeModal = ({ errorMessage, deleteNoticModalHandler }) => {
  return (
    <>
      <NoticeModalBackground onClick={deleteNoticModalHandler}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>{errorMessage}</div>
          <Button onClick={deleteNoticModalHandler}>닫기</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
