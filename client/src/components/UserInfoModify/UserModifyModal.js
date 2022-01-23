import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LogoutAction } from '../../actions/UserInfoAction';
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
  ModifyPasswordBtn,
  SignOutBtn
} from './UserModifyModalStyle';
import { ErrorMessage } from '../GlobalMessage/GlobalMessage';
import { IoClose } from 'react-icons/io5';
import { UserModifyNoticeModal } from '../../components/NoticeModal/UserModifyNoticeModal/UserModifyNoticeModal';
import { SignoutNoticeModal } from '../../components/NoticeModal/UserModifyNoticeModal/SignoutNoticeModal';
import { Verification } from '../VerificationModal/VerificationModal';
import { UserImageSelectModal } from './UserImageSelectModal';
import { userImage } from '../../assets/images/userImage/userImage';
import { RiUserLine } from 'react-icons/ri'; // 아이디 아이콘
import { RiShieldKeyholeLine } from 'react-icons/ri'; // 새 비밀번호 아이콘
import { RiShieldKeyholeFill } from 'react-icons/ri'; // 새 비밀번호확인 아이콘

axios.defaults.withCredentials = true;

export function UserModifyModal ({
  closeUserInfoModify,
  userInfoModifyBtnHandler,
  myUserInfo,
  setIsOpenModifyModal,
  updateUserInfo
}) {
  
  const [modifyUserInputInfo, setModifyUserInputInfo] = useState({
    id: '',
    userId: '',
    userNickName: '',
    userImage: ''
  });
  // const { id, userId, userNickName, userImages } = modifyUserInputInfo; // input 값으로 들어오는 정보
  const [inputUserNickName, setInputUserNickName] = useState(null);
  const [inputPassword, setInputPassword] = useState('');
  const [inputUserImage, setInputUserImage] = useState(null);
  const [inputUserInfoModifyCheck, setInputUserInfoModifyCheck] = useState(false);
  const [passwordChk, setPasswordChk] = useState(false);
  const [nickNameErrorMessage, setNickNameErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [pwChkErrorMessage, setPwChkErrorMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isModificationSuccess, setIsModificationSuccess] = useState(false);
  const [isSignoutSuccess, setisSignoutSuccess] = useState(false);
  const isValidPassword = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/; // 문자, 숫자 1개이상 포함, 8자리 이상
  const [isChecked, setIsChecked] = useState(false);
  const [isSelectUserImgOpen, setIsSelectUserImgOpen] = useState(false);
  const [isOpenSignoutNotice, setIsOpenSignoutNotice] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  // 모달 창 닫는 버튼 함수
  const closeModal = () => {
    closeUserInfoModify();
  };

  // !input handler-NickName
  const handleInputNickName = (e) => {
    if (myUserInfo.userNickName === e.target.value) {
      setNickNameErrorMessage('기존과 동일한 닉네임입니다');
    } else {
      setNickNameErrorMessage('');
      setInputUserInfoModifyCheck(true);
      setInputUserNickName(e.target.value);
    }
  };

  // !input handler-PW
  const handleInputPW = (e) => {
    if (e.target.value.length > 0 && isValidPassword.test(e.target.value) === false) {
      setPasswordErrorMessage('8자리 이상의 문자+숫자 조합으로 만들어주세요');
    } else {
      setPasswordErrorMessage('');
      setInputPassword(e.target.value);
    }
  };

  // !input handler-PWSheck
  const handlePWCheck = (e) => {
    if (e.target.value.length === 0) {
      setPwChkErrorMessage('');
    } else if (e.target.value === inputPassword) {
      setPwChkErrorMessage('');
      setPasswordChk(true);
    } else {
      setPwChkErrorMessage('비밀번호가 일치하지 않습니다');
    }
  };

  // 사진 선택 모달 열기
  const openSelectImgModal = () => {
    setIsSelectUserImgOpen(!isSelectUserImgOpen);
  };

  // 유저가 이미지를 넣는 함수
  const handleInputImage = (alt) => {
    setInputUserImage(userImage[`${alt}`]);
    setInputUserInfoModifyCheck(true);
  };

  // 회원정보 유저정보 수정 함수
  const modifyUserInfoHandler = () => {
    if (inputUserInfoModifyCheck) {
      const tempUserInfo = {
        userNickName: inputUserNickName || myUserInfo.userNickName,
        userImage: inputUserImage || myUserInfo.userImage
      };

      axios
        .patch(`https://server.bookdam.link/user/${myUserInfo.id}`,
          {
            userInfo: tempUserInfo
          },
          {
            headers: { 'Content-Type': 'application/json' }
          }
        )
        .then((data) => {
          if (data.data.message === 'success') {
            updateUserInfo(
              {
                ...myUserInfo,
                userNickName: tempUserInfo.userNickName,
                userImage: tempUserInfo.userImage
              });
            setInputUserInfoModifyCheck(false);
          }
        })
        .catch((err) => {

        });
    } else if (inputPassword.length !== 0) {
      axios
        .patch(`https://server.bookdam.link/user/${myUserInfo.id}`,
          {
            userInfo: {
              password: inputPassword
            }
          },
          {
            headers: { 'Content-Type': 'application/json' }
          })
        .then((data) => {
          if (data.status === 201) {
            setIsModificationSuccess(true);
            setErrorMessage('비밀번호가 수정 되었습니다');
          }
        })
        .catch((err) => {

        });
    } else {
      setErrorMessage('변경할 정보를 입력해주세요');
    }
  };

  // 회원정보수정 노티스 모달 핸들러
  const userModifyNoticeModalHandler = () => {
    setIsModificationSuccess(false);
    setIsOpenModifyModal(false);
  };

  // 회원정보 탈퇴 함수
  const signOutHandler = () => {
    axios
      .delete(`https://server.bookdam.link/user/${myUserInfo.id}`)
      .then((data) => {
        sessionStorage.removeItem('logged');
        if (data.status === 200) { // 상태코드 확인
          dispatch(LogoutAction());
          setisSignoutSuccess(true);
        }
        history.push('/');
      });
  };

  // 회원탈퇴 버튼을 눌렀을 열리는 노티스 모달 여는 함수
  const openSignoutNoticelHandler = () => {
    setisSignoutSuccess(false);
    setIsOpenSignoutNotice(!isOpenSignoutNotice);
  };

  return (
    <>
      {!isChecked
        ? <Verification setIsChecked={setIsChecked} closeModal={closeModal} />
        : <UserInfoModifyModalContainer onClick={userInfoModifyBtnHandler}>
          <UserInfoModifyContainer onClick={(e) => e.stopPropagation()}>
            {isSelectUserImgOpen
              ? <UserImageSelectModal
                  handleInputImage={handleInputImage}
                  openSelectImgModal={openSelectImgModal}
                />
              : null}
            <ModifyCloseSection>
              <div onClick={closeModal}>
                <IoClose />
              </div>
            </ModifyCloseSection>
            <UserInfoSection>
              <UserImgSection>
                <EditPictureWrap>
                  <EditPictureBtn onClick={openSelectImgModal}>사진선택</EditPictureBtn> {/* 이미지 처리 할 것 */}
                </EditPictureWrap>
                <UserImage src={inputUserImage || myUserInfo.userImage} />
              </UserImgSection>
              <UserNickName>{myUserInfo.userNickName}</UserNickName>
            </UserInfoSection>
            <UserInfoEditSection>
              <span>
                <span><RiUserLine /></span><NickNameInput onChange={handleInputNickName} />
                <span><ModificationBtn className='NickNameChangeBtn' onClick={modifyUserInfoHandler}>
                  사진 / 닉네임 변경
                </ModificationBtn>
                </span>
                <ErrorMessage>{nickNameErrorMessage}</ErrorMessage>
              </span>
              <span>
                <span><RiShieldKeyholeLine /></span><PasswordInput onChange={handleInputPW} />
              </span>
              <ErrorMessage>{passwordErrorMessage}</ErrorMessage>
              <span>
                <span><RiShieldKeyholeFill /></span><PasswordChkInput onChange={handlePWCheck} />
              </span>
              <ErrorMessage>{pwChkErrorMessage}</ErrorMessage>
              <ErrorMessage>{errorMessage}</ErrorMessage>
              <UserInfoModifyBtnSection>
                {isModificationSuccess
                  ? <UserModifyNoticeModal
                      errorMessage={errorMessage}
                      userModifyNoticeModalHandler={userModifyNoticeModalHandler}
                    />
                  : null}
                <ModifyPasswordBtn className='PasswordChangeBtn' onClick={modifyUserInfoHandler}>
                  비밀번호 변경
                </ModifyPasswordBtn>
                {isOpenSignoutNotice
                  ? <SignoutNoticeModal
                      openSignoutNoticelHandler={openSignoutNoticelHandler}
                      signOutHandler={signOutHandler}
                    />
                  : null}
                <SignOutBtn onClick={openSignoutNoticelHandler}>
                  회원탈퇴
                </SignOutBtn>
              </UserInfoModifyBtnSection>
            </UserInfoEditSection>
          </UserInfoModifyContainer>
        </UserInfoModifyModalContainer>}
    </>
  );
}
