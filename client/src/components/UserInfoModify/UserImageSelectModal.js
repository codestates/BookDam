import React from 'react';
import { useSelector } from 'react-redux';
import {
  UserImgSelectModalContainer,
  UserImgSelectContainer,
  SelectImgText,
  UserImageContainer,
  UserImage
} from './UserImageSelectModalStyle';
import { userImage } from '../../assets/images/userImage/userImage';

export const UserImageSelectModal = ({ handleInputImage, openSelectImgModal }) => {
  // const userState = useSelector(state => state.userInfoReducer);
  // const { userInfo } = userState;

  const selectUserImage = (alt) => {
    handleInputImage(alt);
    openSelectImgModal();
  };

  return (
    <>
      <UserImgSelectModalContainer>
        <UserImgSelectContainer>
          <SelectImgText>당신의 이미지를 골라주세요</SelectImgText>
          <UserImageContainer>
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
          </UserImageContainer>
        </UserImgSelectContainer>
      </UserImgSelectModalContainer>
    </>
  );
};
