import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IntroWholeContainer,
  SectionWrapperOne,
  SectionWrapperTwo,
  SectionWrapperThree,
  SectionContainer,
  SectionInfoContainer,
  ImageContainer,
  TextContainer,
  TextHeaderContainer,
  ButtonWrapper,
  ButtonContainer,
  ButtonsInIntro
} from './IntroWrapperStyle';
import { LoginModal } from '../Login/LoginModal';
import { SignupModal } from '../Signup/SignupModal';
import { useSelector } from 'react-redux';

export const IntroWrapper = () => {
  const state = useSelector(state => state.userInfoReducer);
  const { userInfo } = state;
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenSignupModal, setIsOpenSignupModal] = useState(false);

  const handleLoginModal = () => {
    console.log(state);
    setIsOpenSignupModal(false);
    setIsOpenLoginModal(true);
    document.body.style.overflow = 'hidden'; // Login 모달창 열면서 스크롤 방지
  };

  const handleSignupModal = () => {
    setIsOpenLoginModal(false);
    setIsOpenSignupModal(true);
    document.body.style.overflow = 'hidden'; // Signup 모달창 열면서 스크롤 방지
  };

  const handleCloseSignupModal = () => {
    setIsOpenSignupModal(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <IntroWholeContainer>
        {isOpenLoginModal
          ? <LoginModal
              setIsOpenLoginModal={setIsOpenLoginModal}
              handleSignupModal={handleSignupModal}
            />
          : null}
        {isOpenSignupModal
          ? <SignupModal
              handleCloseSignupModal={handleCloseSignupModal}
              handleLoginModal={handleLoginModal}
            />
          : null}
        <SectionWrapperOne>
          <SectionContainer>
            <SectionInfoContainer>{/* SectionInfo3 */}
              <ImageContainer>{userInfo.userId}</ImageContainer>
              <TextContainer>
                <TextHeaderContainer>
                  <h1>Write</h1>
                </TextHeaderContainer>
                <h2>책에서 본 감명 깊은 문장을</h2>
                <h2>기록할 수 있어요</h2>
              </TextContainer>
            </SectionInfoContainer>
            <ButtonWrapper>
              <ButtonContainer>
                <Link to='/feedpage'>
                  <ButtonsInIntro>시작하기</ButtonsInIntro>
                </Link>
                <ButtonsInIntro onClick={handleLoginModal}>로그인</ButtonsInIntro>
              </ButtonContainer>
            </ButtonWrapper>
          </SectionContainer>
        </SectionWrapperOne>

        <SectionWrapperTwo>
          <SectionInfoContainer>{/* SectionInfo2 */}
            <TextContainer>Text1</TextContainer>
            <ImageContainer>Image2</ImageContainer>
          </SectionInfoContainer>
        </SectionWrapperTwo>

        <SectionWrapperThree>
          <SectionContainer>
            <SectionInfoContainer>{/* SectionInfo3 */}
              <ImageContainer>Image3</ImageContainer>
              <TextContainer>Text3</TextContainer>
            </SectionInfoContainer>
            <ButtonWrapper>
              <ButtonContainer>
                <ButtonsInIntro>시작하기</ButtonsInIntro>
                <ButtonsInIntro>로그인</ButtonsInIntro>
              </ButtonContainer>
            </ButtonWrapper>
          </SectionContainer>
        </SectionWrapperThree>
      </IntroWholeContainer>
    </>
  );
};
