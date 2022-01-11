import Axios from 'axios';
import React, { useState } from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button
} from './NoticeModalStyle';

export const NoticeModal = ({ NoticeModalOpenHandler, followInfo }) => {
  const [isFollow, setIsFollow] = useState(true);

  const deleteFollowReq = () => {
    // Axios.delete(`http://localhost:4000/follow/${'userInfo.id'}?${'follow.id'}`,
    //   {
    //     headers: { 'Contnet-Type': 'application/json' }
    //   })
    //   .then((data) => {
    //     setIsFollow(false)
    //     NoticeModalOpenHandler()
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     NoticeModalOpenHandler()
    //   })
    console.log();
  };

  return (
    <>
      <NoticeModalBackground onClick={NoticeModalOpenHandler}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
          <div>{followInfo.userNickName}님의 팔로우를 취소 하시겠습니까?</div>
          <Button onClick={deleteFollowReq}>확인</Button>
          <Button onClick={NoticeModalOpenHandler}>닫기</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  );
};
