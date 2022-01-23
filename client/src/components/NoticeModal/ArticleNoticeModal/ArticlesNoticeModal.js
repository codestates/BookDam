import React from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './ArticlesNoticeModalStyle';

export const ArticleNoticeModal = ({ deleteNoticModalHandler, deleteArticle }) => {
  return (
    <>
      <NoticeModalBackground onClick={deleteNoticModalHandler}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>수집하신 문장을 삭제하시겠습니까?</div>
          <Button onClick={deleteArticle}>확인</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
