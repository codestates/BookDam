import Axios from 'axios';
import React, { useState } from 'react';
import {
  NoticeModalBackground,
  NoticeModalContainer,
  Button 
} from './NoticeModalStyle'


export const NoticeModal = ({ NoticeModalOpenHandler }) => {
  const [isFollow, setIsFollow] = useState(true)

  const deleteFollowReq =() => {
    Axios.delete(`http://localhost:4000/follow/${'userInfo.id'}?${'follow.id'}`,
      {
        headers: { 'Contnet-Type': 'application/json' }
      })
      .then((data) => {
        setIsFollow(false)
        NoticeModalOpenHandler()
      })
      .catch((err) => {
        console.log(err)
        NoticeModalOpenHandler()
      })
  }

  return (
    <>
      <NoticeModalBackground onClick={NoticeModalOpenHandler}>
        <NoticeModalContainer onClick={(e) => e.stopPropagation()}>
        <div>{'팔로우 아이디'}님의 팔로우를 취소 하시겠습니까?</div>
          <Button onClick={deleteFollowReq}>확인</Button>
          <Button onClick={NoticeModalOpenHandler}>닫기</Button>
        </NoticeModalContainer>
      </NoticeModalBackground>
    </>
  )
}