import React, { useState } from 'react';
import {
  VerificationBackground,
  VerificationContainer,
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
    Axios.post(`http://localhost:4000/user/validation/${userInfo.id}`,
      {
        userInfo: verifyPassword
      }
    )
      .then((data) => {
        setIsChecked(true);
        console.log(data);
      })
      .catch((err) => {
        setErrorMessage('비밀번호를 확인하세요');
        console.log(err);
      });
  };

  return (
    <>
      <VerificationBackground onClick={closeModal}>
        <VerificationContainer onClick={(e) => e.stopPropagation()}>
          <h1>본인 인증</h1>
          <div>아이디: {userInfo.userId}</div>
          <input
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
