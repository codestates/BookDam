import React from 'react';
import { LoginModalWholeBackground, LoginModalContainer, CloseButton, InputContainer,
         LoginTitle, InputId, InputPW  } from './LoginModalStyle';
import { Message, Errormessage } from '../GlobalMessage/GlobalMessage';
import { LoginThemeBtn } from '../GlobalButton/GlobalButton';
import { Link, useHistory } from 'react-router-dom';

export const LoginModal = () => {

  return (
    <div>
      <LoginModalWholeBackground>
        <LoginModalContainer>
          <LoginTitle>BookDam 로그인</LoginTitle>
            <InputContainer>
              <InputId />
              <InputPW />
              <Errormessage />
              <LoginThemeBtn>로그인</LoginThemeBtn>
              <Message>아직 아이디가 없으신가요? 👇</Message>
              <LoginThemeBtn>
              <Link to='./signup' style={{ color: 'inherit', textDecoration: 'none' }}>회원가입</Link>
              </LoginThemeBtn>
            </InputContainer>
        </LoginModalContainer>
      </LoginModalWholeBackground>
    </div>
  );
}