import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
import { UserModifyNoticeModal} from '../../components/NoticeModal/UserModifyNoticeModal/UserModifyNoticeModal';
import { SignoutNoticeModal } from '../../components/NoticeModal/UserModifyNoticeModal/SignoutNoticeModal';
import { Verification } from '../VerificationModal/VerificationModal';

// 회원정보수정 PATCH
// http://localhost:4000/user/:user_Id
// { userInfo: {userId:sangkwon2406, } }

axios.defaults.withCredentials = true;

export function UserModifyModal ({ 
  closeUserInfoModify, 
  userInfoModifyBtnHandler, 
  myUserInfo, 
  setIsOpenModifyModal, }) {
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
  const [errorMessage, setErrorMessage] = useState('');
  const [isModificationSuccess, setIsModificationSuccess] = useState(false);
  const [isSignoutSuccess, setisSignoutSuccess] = useState(false);
  const isValidPassword = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/; // 문자, 숫자 1개이상 포함, 8자리 이상
  const [isChecked, setIsChecked] = useState(false);
  const history = useHistory();

  // 모달 창 닫는 버튼 함수
  const closeModal = () => {
    closeUserInfoModify();
  };

  // input handler-NickName
  const handleInputNickName = (e) => {
    if (myUserInfo.userNickName === e.target.value) {
      setNickNameErrorMessage('기존과 동일한 닉네임입니다');
    } 
    // if (userNickName === '') {
    //   setNickNameErrorMessage('빈 칸을 채워주세요');
    // }
    else {
      setNickNameErrorMessage('');
      setModifyUserInputInfo({
        userNickName: e.target.value,
        password
      });
    }
  };

  // input handler-PW
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

  // input handler-PWSheck
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
      .patch(`http://localhost:4000/user/${myUserInfo.id}`,
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
        if (data.status === 200) {
          setIsModificationSuccess(true)
          setErrorMessage('회원 정보가 수정되었습니다')
          console.log('회원정보 수정 성공');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 회원정보수정 노티스 모달 핸들러
  const userModifyNoticeModalHandler = () => {
    setIsModificationSuccess(false)
    setIsOpenModifyModal(false)
  };

  // 회원정보 탈퇴 함수
  const signOutHandler = () => {
    axios
      .delete(`http://localhost:4000/user/${myUserInfo.id}`)
      .then((data) => {
        if (data.status === 200) {
          setisSignoutSuccess(true);
          setErrorMessage('다음에 또 만나요!');
          console.log('회원 탈퇴되었습니다');
        }
        history.push('/')
      })
      .catch((err) => {;
        console.log(err);
      });
  };

  // 회원탈퇴 노티스 모달 핸들러
  const signoutNoticeModalHandler = () => {
    setisSignoutSuccess(false)
    setIsOpenModifyModal(false)
  };

  // 회원정보 수정 버튼 클릭시 본인인증(비밀번호)을 하고
  // 서버에 저장된 비밀번호와 입력한 비밀번호가 동일하면  -> `http://localhost:4000/user/validation/:user_Id`
  // 회원정보 수정창에는 회원정보 수정 기능과 비밀번호 수정 기능이 각각 실행하게 한다
  // 회원정보 수정 로직(server)
  // 회원정보 수정 로직
    // user/validation/:user_Id
    // userInfo 에다가 password 담아서 보낸다
    // 비밀번호 맞는 지 확인한다
    
    // user/:user_Id 로 회원정보 수정 요청한다
    // 닉네임 변경 시 닉네임만 들어오고
    // password 변경 시 password만 들어온다
    // req body userInfo 에 담아서 보내준다.
    // (userNickName or password)

  return (
    <>
    {!isChecked
        ? <Verification setIsChecked={setIsChecked} closeModal={closeModal}/>
        : <UserInfoModifyModalContainer onClick={userInfoModifyBtnHandler}>
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
                <UserImage src={myUserInfo.userImage} />
              </UserImgSection>
              <UserNickName>{myUserInfo.userNickName}</UserNickName>
            </UserInfoSection>
            <UserInfoEditSection>
              <span>
                닉네임: <NickNameInput onChange={handleInputNickName} />
                <ModificationBtn className='NickNameChangeBtn' onClick={modifyUserInfoHandler}>
                  닉네임 변경
                </ModificationBtn>
              </span>
              <ErrorMessage>{nickNameErrorMessage}</ErrorMessage>
              <span>
                새 비밀번호: <PasswordInput onChange={handleInputPW} />
              </span>
              <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
              <span>
                비밀번호 확인: <PasswordChkInput onChange={handlePWCheck} />
              </span>
              <ErrorMessage>{pwChkErrorMessage}</ErrorMessage>
              <UserInfoModifyBtnSection>
                {isModificationSuccess
                  ? <UserModifyNoticeModal
                      errorMessage={errorMessage}
                      userModifyNoticeModalHandler={userModifyNoticeModalHandler}
                    />
                  : null}
                <ModificationBtn className='PasswordChangeBtn' onClick={modifyUserInfoHandler}>
                  비밀번호 변경
                </ModificationBtn>
                {isSignoutSuccess
                  ? <SignoutNoticeModal
                      errorMessage={errorMessage}
                      signoutNoticeModalHandler={signoutNoticeModalHandler}
                    />
                  : null}
                <SignOutBtn onClick={signOutHandler}>
                  회원탈퇴
                </SignOutBtn>
              </UserInfoModifyBtnSection>
            </UserInfoEditSection>
          </UserInfoModifyContainer>
        </UserInfoModifyModalContainer>}
    </>
  );
}
