import React from 'react';
import {
  SignupModalWholeBackground,
  SignupModalWrapper,
  SignupCloseButton,
  SignupModalContainer,
  SignupTitle,
  InputContainer,
  InputId,
  InputUserNickName,
  InputPW,
  InputPWCheckout,
  MoveToLoginModal
} from './SignupModalStyle';
import { Message, Errormessage } from '../GlobalMessage/GlobalMessage';
import { LoginThemeBtn } from '../GlobalButton/GlobalButton';

export const SignupModal = ({
  handleCloseSignupModal,
  handleLoginModal
}) => {
  const handleSignup = () => {
    // axios.post 요청
  };

  return (
    <div>
      <SignupModalWholeBackground>
        <SignupModalWrapper>
          <SignupCloseButton onClick={handleCloseSignupModal}>&times;</SignupCloseButton>
          <SignupModalContainer>
            <SignupTitle>BookDam</SignupTitle>
            <InputContainer>
              <InputId />
              <InputUserNickName />
              <InputPW />
              <InputPWCheckout />
              <Errormessage />
              <LoginThemeBtn onClick={handleSignup}>가입하기</LoginThemeBtn>
              <Message>아이디가 있으신가요?
                <MoveToLoginModal onClick={handleLoginModal}>로그인</MoveToLoginModal>
              </Message>
            </InputContainer>
          </SignupModalContainer>
        </SignupModalWrapper>
      </SignupModalWholeBackground>
    </div>
  );
};
