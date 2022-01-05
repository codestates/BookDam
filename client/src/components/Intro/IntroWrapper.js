import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // 로그인 상태변경 테스트용
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

export const IntroWrapper = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenSignupModal, setIsOpenSignupModal] = useState(false);
  const state = useSelector(state => state.testReducer); // 로그인 상태변경 테스트용
  const { isLogin, articleInfo, userInfo } = state; // 로그인 상태변경 테스트용

  const handleLoginModal = () => {
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
    document.body.style.overflow = 'hidden';
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
              <ImageContainer>{userInfo.userNickName}</ImageContainer>
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
            <TextContainer>{isLogin ?'true' : 'false'}</TextContainer>
            <ImageContainer>Image2</ImageContainer>
          </SectionInfoContainer>
        </SectionWrapperTwo>

        <SectionWrapperThree>
          <SectionContainer>
            <SectionInfoContainer>{/* SectionInfo3 */}
              <ImageContainer>Image3</ImageContainer>
              <TextContainer>{articleInfo[0].book_Title}</TextContainer>
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
