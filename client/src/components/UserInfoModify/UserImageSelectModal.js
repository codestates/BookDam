import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  UserImgSelectModalContainer,
  UserImgSelectContainer,
  UserImage
} from './UserImageSelectModalStyle';
import { userImage } from '../../assets/images/userImage/userImage';

export const UserImageSelectModal = ({ handleInputImage, openSelectImgModal }) => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.userInfoReducer);
  const { userInfo } = userState;

  const selectUserImage = (alt) => {
    handleInputImage(alt);
    openSelectImgModal();
    console.log('userImageSelect-사진선택 모달 열기/닫기');
  };

  return (
    <>
      <UserImgSelectModalContainer>
        <UserImgSelectContainer>
          <h2>당신의 이미지를 골라주세요</h2>
          <UserImage src={userImage.bird} alt='bird' onClick={() => selectUserImage('bird')} />
          <UserImage src={userImage.owl} alt='owl' onClick={() => selectUserImage('owl')} />
          <UserImage src={userImage.penguin} alt='penguin' onClick={() => selectUserImage('penguin')} />
          <UserImage src={userImage.insect} alt='insect' onClick={() => selectUserImage('insect')} />
          <UserImage src={userImage.bee} alt='bee' onClick={() => selectUserImage('bee')} />
          <UserImage src={userImage.dog} alt='dog' onClick={() => selectUserImage('dog')} />
          <UserImage src={userImage.cat} alt='cat' onClick={() => selectUserImage('cat')} />
          <UserImage src={userImage.cow} alt='cow' onClick={() => selectUserImage('cow')} />
          <UserImage src={userImage.pig} alt='pig' onClick={() => selectUserImage('pig')} />
          <UserImage src={userImage.fox} alt='fox' onClick={() => selectUserImage('fox')} />
          <UserImage src={userImage.whale} alt='whale' onClick={() => selectUserImage('whale')} />
          <UserImage src={userImage.shark} alt='shark' onClick={() => selectUserImage('shark')} />

        </UserImgSelectContainer>
      </UserImgSelectModalContainer>
    </>
  );
};
