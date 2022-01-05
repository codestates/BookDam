import { userData } from '../../dummyfiles/dummyLoginInfo'; //로그인 테스트 위한 dummyData
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  LoginModalWholeBackground,
  LoginModalWrapper,
  LoginCloseButton,
  LoginModalContainer,
  LoginTitle,
  InputContainer,
  InputId,
  InputPW
} from './LoginModalStyle';
import { Message, ErrorMessage } from '../GlobalMessage/GlobalMessage';
import { LoginThemeBtn } from '../GlobalButton/GlobalButton';
import { loginAction } from '../../actions/LoginAction';


export const LoginModal = ({ setIsOpenLoginModal, handleSignupModal, handleCloseSignupModal }) => {
  const [loginInfo, setLoginInfo] = useState({ userId: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const state = useSelector(state => state.testReducer);
  const { isLogin } = state;
  const dispatch = useDispatch();

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

  const handleLogin = () => {
    const { userId, password } = loginInfo;

    if(userId === '' || password === '') {
      setErrorMessage('아이디와 비밀번호를 입력하세요');
    } else {
      //axois.get 요청 자리
      const resultData = userData.filter((el) => {
        return (loginInfo.userId === el.userId &&  loginInfo.password === el.password);
      });

      if(resultData) {
        dispatch(loginAction(resultData));
        setIsOpenLoginModal(false);
        document.body.style.overflow = 'unset'; // 스크롤 방지 해제
      }
    }
  };

  const handleCloseLoginModal = () => {
    setIsOpenLoginModal(false);
    document.body.style.overflow = 'unset'; // 스크롤 방지 해제
  };

  return (
    <div>
      <LoginModalWholeBackground>
        <LoginModalWrapper>
          <LoginCloseButton onClick={handleCloseLoginModal}>&times;</LoginCloseButton>
          <LoginModalContainer>
            <LoginTitle>BookDam</LoginTitle>
            <InputContainer>
              <InputId onChange={handleInputId} />
              <InputPW onChange={handleInputPW} />
              <ErrorMessage>{errorMessage}</ErrorMessage>
              <LoginThemeBtn onClick={handleLogin}>로그인</LoginThemeBtn>
              <Message>아직 아이디가 없으신가요? 👇</Message>
              <LoginThemeBtn handleCloseSignupModal={handleCloseSignupModal} onClick={handleSignupModal}>회원가입</LoginThemeBtn>
            </InputContainer>
          </LoginModalContainer>
        </LoginModalWrapper>
      </LoginModalWholeBackground>
    </div>
  );
};
