import React from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './FollowNoticeModalStyle';
import Axios from 'axios';

export const FollowNoticeModal = ({ closeNoticeModal, setIsfollow, userInfo, followInfo }) => {
  const deleteFollowReq = () => {
    Axios.delete(`https://server.bookdam.link/follow/${userInfo.id}?follow_Id=${followInfo.id}`,
      {
        headers: { 'Contnet-Type': 'application/json' }
      })
      .then((data) => {
        setIsfollow(0);
        document.location.reload();
      })
      .catch((err) => {
      });
  };
  return (
    <>
      <NoticeModalBackground onClick={closeNoticeModal}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>
            <strong>{followInfo.userNickName}</strong>님의 팔로우를 취소 하시겠습니까?
          </div>
          <Button onClick={deleteFollowReq}>확인</Button>
          <Button onClick={closeNoticeModal}>닫기</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
