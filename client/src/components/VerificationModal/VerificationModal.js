import React, { useState } from 'react';
import {
  VerificationBackground,
  VerificationContainer,
  VerificationTitle,
  ID,
  InputPassword,
  Button
} from './VerificationModalStyle';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { ErrorMessage } from '../GlobalMessage/GlobalMessage';

export const Verification = ({ setIsChecked, closeModal }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const userState = useSelector(state => state.userInfoReducer);
  const { userInfo } = userState;
  const [verifyPassword, setVerifyPassword] = useState('');

  const passwordInputChangeHandler = (e) => {
    setVerifyPassword({
      password: e.target.value
    });
  };

  const passwordChk = () => {
    Axios.post(`https://server.bookdam.link/user/validation/${userInfo.id}`,
      {
        userInfo: verifyPassword
      }
    )
      .then((data) => {
        setIsChecked(true);
      })
      .catch((err) => {
        setErrorMessage('비밀번호를 확인하세요');
      });
  };

  return (
    <>
      <VerificationBackground onClick={closeModal}>
        <VerificationContainer onClick={(e) => e.stopPropagation()}>
          <VerificationTitle>본인 인증</VerificationTitle>
          <ID>ID: {userInfo.userId}</ID>
          <InputPassword
            type='password'
            placeholder='비밀번호를 입력하세요'
            onChange={passwordInputChangeHandler}
          />
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <Button onClick={passwordChk}>확인</Button>
        </VerificationContainer>
      </VerificationBackground>
    </>
  );
};
