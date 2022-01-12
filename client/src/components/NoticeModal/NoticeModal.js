import Axios from 'axios';
import React, { useState } from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './NoticeModalStyle';

export const NoticeModal = ({ NoticeModalOpenHandler, followInfo, userInfo }) => {
  console.log('유저정보', userInfo);
  console.log('팔로우정보', followInfo);
  const deleteFollowReq = () => {
    if (userInfo.id === 1) {
<<<<<<< HEAD
      NoticeModalOpenHandler();
    } else {
=======
      NoticeModalOpenHandler()
    }
    else {
>>>>>>> d1ac2956db6ba974d1d03a9ffa841998f6978a8f
      Axios.delete(`http://localhost:4000/follow/${userInfo.id}?follow_Id=${followInfo.id}`,
        {
          headers: { 'Contnet-Type': 'application/json' }
        })
        .then((data) => {
<<<<<<< HEAD
          NoticeModalOpenHandler();
        })
        .catch((err) => {
          console.log(err);
          NoticeModalOpenHandler();
        });
=======
          
          NoticeModalOpenHandler()
        })
        .catch((err) => {
          console.log(err)
          NoticeModalOpenHandler()
        })
>>>>>>> d1ac2956db6ba974d1d03a9ffa841998f6978a8f
    }
  };

  return (
    <>
      <NoticeModalBackground onClick={NoticeModalOpenHandler}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>
            <strong>{followInfo.userNickName}</strong>님의 팔로우를 취소 하시겠습니까?
          </div>
          <Button onClick={deleteFollowReq}>확인</Button>
          <Button onClick={NoticeModalOpenHandler}>닫기</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
