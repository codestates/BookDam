import Axios from 'axios';
import React, { useState } from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './NoticeModalStyle';

export const NoticeModal = ({ NoticeModalOpenHandler, followInfo, userInfo }) => {
  const deleteFollowReq = () => {
    if (userInfo.id === 1) {
      NoticeModalOpenHandler();
    } else {
      Axios.delete(`http://localhost:4000/follow/${userInfo.id}?follow_Id=${followInfo.id}`,
        {
          headers: { 'Contnet-Type': 'application/json' }
        })
        .then((data) => {
          NoticeModalOpenHandler();
        })
        .catch((err) => {
          NoticeModalOpenHandler();
        });
    }
  };

  return (
    <>
      <NoticeModalBackground onClick={NoticeModalOpenHandler}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>
            <strong>{followInfo.userNickName}</strong>님의 팔로우를 취소 하시겠습니까?
          </div>
          <div className='BTN'>
            <Button onClick={deleteFollowReq}>확인</Button>
            <Button onClick={NoticeModalOpenHandler}>닫기</Button>
          </div>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
