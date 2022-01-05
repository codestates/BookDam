import React from 'react';
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
import { Message, Errormessage } from '../GlobalMessage/GlobalMessage';
import { LoginThemeBtn } from '../GlobalButton/GlobalButton';

export const LoginModal = ({
  setIsOpenLoginModal,
  handleSignupModal,
  handleCloseSignupModal
}) => {
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
              <InputId />
              <InputPW />
              <Errormessage />
              <LoginThemeBtn>로그인</LoginThemeBtn>
              <Message>아직 아이디가 없으신가요? 👇</Message>
              <LoginThemeBtn handleCloseSignupModal={handleCloseSignupModal} onClick={handleSignupModal}>회원가입</LoginThemeBtn>
            </InputContainer>
          </LoginModalContainer>
        </LoginModalWrapper>
      </LoginModalWholeBackground>
    </div>
  );
};
