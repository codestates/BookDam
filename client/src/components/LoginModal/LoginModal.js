import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {
  LoginModalWholeBackground,
  // LoginModalWholeContainer,
  LoginModalWrapper,
  LoginCloseButton,
  LoginModalContainer,
  LoginModalHeader,
  LoginModalLeft,
  LoginTitle,
  InputContainer,
  InputId,
  InputPW
} from './LoginModalStyle';
import { Message, ErrorMessage } from '../GlobalMessage/GlobalMessage';
import { LoginThemeBtn } from '../GlobalButton/GlobalButton';
import { LoginAction } from '../../actions/UserInfoAction';

export const LoginModal = ({
  setIsOpenLoginModal,
  handleSignupModal,
  handleCloseSignupModal
}) => {
  const [loginInfo, setLoginInfo] = useState({ userId: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputId = (e) => {
    setLoginInfo({
      userId: e.target.value,
      password: loginInfo.password
    });
  };

  const handleInputPW = (e) => {
    setLoginInfo({
      userId: loginInfo.userId,
      password: e.target.value
    });
  };

  const handleLogin = async () => {
    const { userId, password } = loginInfo;

    if (userId === '' || password === '') {
      setErrorMessage('아이디와 비밀번호를 입력하세요');
    } else {
      await axios({
        withCredentials: true,
        method: 'post',
        url: 'https://server.bookdam.link/user/login',
        headers: {
          authorization: `Bearer: ${process.env.ACCESS_SECRET}`,
          'Content-Type': 'application/json'
        },
        data: {
          userInfo: {
            userId: loginInfo.userId,
            password: loginInfo.password
          }
        }
      })
        .then((res) => {
          sessionStorage.setItem('logged', JSON.stringify(res.data.userInfo));

          const userInfoData = res.data.userInfo;
          if (userInfoData) {
            dispatch(LoginAction(userInfoData));
            setIsOpenLoginModal(false);
            document.body.style.overflow = 'unset'; // 스크롤 방지 해제
            history.push('/feedPage');
          }
        })
        .catch((err) => {
          setErrorMessage('아이디와 비밀번호를 확인해주세요.');
        });
    }
  };

  const handleCloseLoginModal = () => {
    setIsOpenLoginModal(false);
    document.body.style.overflow = 'unset'; // 스크롤 방지 해제
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin(); // 인자값이 없어서 엔터나 버튼클릭시 에러 발생
    }
  };

  return (
    <div>
      <LoginModalWholeBackground onClick={handleCloseLoginModal}>
        {/* <LoginModalWholeContainer> */}
        <LoginModalWrapper onClick={(e) => e.stopPropagation()}>
          <LoginModalHeader>
            <LoginModalLeft />
            <LoginCloseButton onClick={handleCloseLoginModal}>&times;</LoginCloseButton>
          </LoginModalHeader>
          <LoginModalContainer>
            <LoginTitle>BookDam</LoginTitle>
            <InputContainer>
              <InputId onChange={handleInputId} />
              <InputPW onChange={handleInputPW} onKeyPress={handleKeyPress}/>
              <ErrorMessage>{errorMessage}</ErrorMessage>
              <LoginThemeBtn onClick={handleLogin}>로그인</LoginThemeBtn>
              <Message>아직 아이디가 없으신가요? 👇</Message>
              <LoginThemeBtn handleCloseSignupModal={handleCloseSignupModal} onClick={handleSignupModal}>회원가입</LoginThemeBtn>
            </InputContainer>
          </LoginModalContainer>
        </LoginModalWrapper>
        {/* </LoginModalWholeContainer> */}

      </LoginModalWholeBackground>
    </div>
  );
};
