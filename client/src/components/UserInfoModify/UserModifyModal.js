import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
import { UserModifyNoticeModal } from '../../components/NoticeModal/UserModifyNoticeModal/UserModifyNoticeModal';
import { SignoutNoticeModal } from '../../components/NoticeModal/UserModifyNoticeModal/SignoutNoticeModal';
import { Verification } from '../VerificationModal/VerificationModal';
import { UserImageSelectModal } from './UserImageSelectModal';
import { userImage } from '../../assets/images/userImage/userImage';
import { UserInfoModifyAction } from '../../actions/UserInfoAction';
// 회원정보수정 PATCH
// http://localhost:4000/user/:user_Id
// { userInfo: {userId:sangkwon2406, } }

axios.defaults.withCredentials = true;

export function UserModifyModal ({
  closeUserInfoModify,
  userInfoModifyBtnHandler,
  myUserInfo,
  setIsOpenModifyModal
}) {
  // const userState = useSelector(state => state.userInfoReducer);
  // const { userInfo } = userState; // 저장된 유저 정보
  // input 값 유효성 검사 : 닉네임이 기존과 동일한가? 동일하면 에러메세지, password가 서로 일치한가? 불일치면 에러메세지
  const [modifyUserInputInfo, setModifyUserInputInfo] = useState({
    id: '',
    userId: '',
    userNickName: '',
    userImage: ''
  });
  const { id, userId, userNickName, userImages } = modifyUserInputInfo; // input 값으로 들어오는 정보
  const [inputUserNickName, setInputUserNickName] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [inputUserImage, setInputUserImage] = useState('')
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
  const history = useHistory();
  const dispatch = useDispatch();
  const userState = useSelector(state => state.userInfoReducer);
  const { userInfo } = userState;

  // 모달 창 닫는 버튼 함수
  const closeModal = () => {
    closeUserInfoModify();
    console.log('회원정보수정 모달 닫힘')
  };

  // input handler-NickName
  const handleInputNickName = (e) => {
    if (myUserInfo.userNickName === e.target.value) {
      setNickNameErrorMessage('기존과 동일한 닉네임입니다');
    }
    else {
      setNickNameErrorMessage('');
      setInputUserNickName(e.target.value)
    }
  };

  // input handler-PW
  const handleInputPW = (e) => {
    if (e.target.value.length > 0 && isValidPassword.test(e.target.value) === false) {
      setPasswordErrorMessage('8자리 이상의 문자+숫자 조합으로 만들어주세요');
    } else {
      setPasswordErrorMessage('');
      setInputPassword(e.target.value);
    }
  };

  // input handler-PWSheck
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
    setIsSelectUserImgOpen(!isSelectUserImgOpen)
    console.log('사진선택 모달 열기/닫기')
  }

  // 유저가 이미지를 넣는 함수
  const handleInputImage = (alt) => {
    console.log(userImage[`${alt}`])
    setInputUserImage(userImage[`${alt}`])
  };

  // 회원정보 유저정보 수정 함수
  const modifyUserInfoHandler = () => {
    if (inputUserNickName.length !== 0 || inputUserImage) {
        axios
        .patch(`http://localhost:4000/user/${myUserInfo.id}`,
          {
            userInfo: {
              userNickName : inputUserNickName || userNickName,
              userImage : inputUserImage || userImages
            }
          },
          {
            headers: { 'Content-Type': 'application/json' }
          }
        )
        .then((data) => {
          if (data.data.message === "success") {
            setErrorMessage('닉네임이 변경 되었습니다');
            console.log('닉네임 수정 성공');
            document.location.reload();
          }
        })
        .catch((err) => {
          console.log(err)
        })
      }
      else if (inputPassword.length !== 0) {
        axios
          .patch(`http://localhost:4000/user/${myUserInfo.id}`,
            {
              userInfo: {
                password: inputPassword,
              }
            },
            {
              headers: { 'Content-Type': 'application/json' }
            })
          .then((data) => {
            if (data.status === 201) {
              setIsModificationSuccess(true);
              setErrorMessage('비밀번호가 수정 되었습니다');
              console.log('비밀번호 수정 성공');
              document.location.reload();
            }
            
          })
          .catch((err) => {
            console.log(err);
          });
      }
      else {
        setErrorMessage('변경할 정보를 입력해주세요')
      }
    };
  
    


    // 회원정보수정 노티스 모달 핸들러
    const userModifyNoticeModalHandler = () => {
      setIsModificationSuccess(false);
      setIsOpenModifyModal(false);
      console.log('회원정보수정 노티스 모달 열기/닫기')
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
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });

  };

  // 회원탈퇴 노티스 모달 핸들러
  const signoutNoticeModalHandler = () => {
    setisSignoutSuccess(false);
    setIsOpenModifyModal(false);
    console.log('회원탈퇴 노티스 모달 열기/닫기')
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
        ? <Verification setIsChecked={setIsChecked} closeModal={closeModal} />
        : <UserInfoModifyModalContainer onClick={userInfoModifyBtnHandler}>
          <UserInfoModifyContainer onClick={(e) => e.stopPropagation()}>
          {isSelectUserImgOpen ? 
            <UserImageSelectModal 
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
              <ErrorMessage>{errorMessage}</ErrorMessage>
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
};