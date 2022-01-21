import React, { useState } from 'react';
import {
  VerificationBackground,
  VerificationContainer,
  CloseSection,
  VerificationSection,
  VerificationTitle,
  ID,
  InputPassword,
  Button
} from './VerificationModalStyle';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { ErrorMessage } from '../GlobalMessage/GlobalMessage';
import { IoClose } from 'react-icons/io5';

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
      <VerificationBackground>
        <VerificationContainer onClick={(e) => e.stopPropagation()}>
          <CloseSection>
            <div onClick={closeModal}>
              <IoClose />
            </div>
          </CloseSection>
          <VerificationSection>
            <VerificationTitle>본인 인증</VerificationTitle>
            <ID>ID: {userInfo.userId}</ID>
            <InputPassword
              type='password'
              placeholder='비밀번호를 입력하세요'
              onChange={passwordInputChangeHandler}
            />
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <Button onClick={passwordChk}>확인</Button>
          </VerificationSection>
        </VerificationContainer>
      </VerificationBackground>
    </>
  );
};
