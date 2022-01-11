import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
  UserInfoModifyModalContainer,
  UserInfoModifyContainer,
  ModifyCloseSection,
  UserInfoSection,
  UserImgSection,
  UserImage,
  EditPictureWrap,
  EditPictureBtn,
  UserNickName,
  UserInfoEditSection,
  NickNameInput,
  PasswordInput,
  PasswordChkInput,
  UserInfoModifyBtnSection,
  ModificationBtn,
  SignOutBtn
} from './UserModifyModalStyle';
import { ErrorMessage } from '../GlobalMessage/GlobalMessage';
import { IoClose } from 'react-icons/io5';
import { data } from '../../dummyfiles/dummyMyFeedList';

// 회원정보수정 PATCH
// http://localhost:4000/user/:user_Id
// { userInfo: {userId:sangkwon2406, } }

axios.defaults.withCredentials = true;

export function UserModifyModal ({ closeUserInfoModify, userInfoModifyBtnHandler }) {
  // const userState = useSelector(state => state.userInfoReducer);
  // const { userInfo } = userState; // 저장된 유저 정보
  // input 값 유효성 검사 : 닉네임이 기존과 동일한가? 동일하면 에러메세지, password가 서로 일치한가? 불일치면 에러메세지
  const [modifyUserInputInfo, setModifyUserInputInfo] = useState({
    id: '',
    userId: '',
    userNickName: '',
    password: '',
    userImage: ''
  });
  const { userId, userNickName, password, userImage } = modifyUserInputInfo; // input 값으로 들어오는 정보
  const [passwordChk, setPasswordChk] = useState(false);
  const [nickNameErrorMessage, setNickNameErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [pwChkErrorMessage, setPwChkErrorMessage] = useState('');
  // const isValidId
  const isValidPassword = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/; // 문자, 숫자 1개이상 포함, 8자리 이상

  // 모달 창 닫는 버튼 함수
  const closeModal = () => {
    closeUserInfoModify();
  };
  // input handler
  const handleInputNickName = (e) => {
    if (data.userInfo.userNickName === e.target.value) {
      setNickNameErrorMessage('기존과 동일한 닉네임입니다');
    } else {
      setNickNameErrorMessage('');
      setModifyUserInputInfo({
        userNickName: e.target.value,
        password
      });
    }
  };

  const handleInputPW = (e) => {
    if (e.target.value.length > 0 && isValidPassword.test(e.target.value) === false) {
      setPasswordErrorMessage('8자리 이상의 문자+숫자 조합으로 만들어주세요');
    } else {
      setPasswordErrorMessage('');
      setModifyUserInputInfo({
        userNickName,
        password: e.target.value
      });
    }
  };

  const handlePWCheck = (e) => {
    if (password.length === 0) {
      setPwChkErrorMessage('');
    } else if (e.target.value === password) {
      setPwChkErrorMessage('');
      setPasswordChk(true);
    } else {
      setPwChkErrorMessage('비밀번호가 일치하지 않습니다');
    }
  };
  // 유저가 이미지를 넣는 함수
  const handleInputImage = () => {

  };
  // 회원정보 수정 함수
  const modifyUserInfoHandler = () => {
    axios
      .patch(`http://localhost:4000/user/${data.userInfo.id}`,
        {
          userInfo: {
            userId,
            userNickName,
            password,
            userImage
          }
        },
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then((data) => {
        console.log(data);
        console.log('회원정보가 수정되었습니다');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 회원정보 탈퇴 함수
  const signOutHandler = () => {
    axios
      .delete(`http://localhost:4000/user/${data.userInfo.id}`)
      .then((data) => {
        console.log('회원 탈퇴되었습니다');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <UserInfoModifyModalContainer onClick={userInfoModifyBtnHandler}>
        <UserInfoModifyContainer onClick={(e) => e.stopPropagation()}>
        <ModifyCloseSection>
          <div onClick={closeModal}>
            <IoClose />
          </div>  
          </ModifyCloseSection>
          <UserInfoSection>
            <UserImgSection>
              <EditPictureWrap>
                <EditPictureBtn>사진선택</EditPictureBtn>
              </EditPictureWrap>
              <UserImage src={data.userInfo.userImage}>
              
              </UserImage>
            </UserImgSection>
            <UserNickName>{data.userInfo.userNickName}</UserNickName>
          </UserInfoSection>
          <UserInfoEditSection>
            <NickNameInput onChange={handleInputNickName} />
            <ErrorMessage>{nickNameErrorMessage}</ErrorMessage>
            <PasswordInput onChange={handleInputPW} />
            <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
            <PasswordChkInput onChange={handlePWCheck} />
            <ErrorMessage>{pwChkErrorMessage}</ErrorMessage>
            <UserInfoModifyBtnSection>
              <ModificationBtn onClick={modifyUserInfoHandler}>
                회원정보 수정
              </ModificationBtn>
              <SignOutBtn onClick={signOutHandler}>
                회원탈퇴
              </SignOutBtn>
            </UserInfoModifyBtnSection>
          </UserInfoEditSection>
        </UserInfoModifyContainer>
      </UserInfoModifyModalContainer>
    </>
  );
}
