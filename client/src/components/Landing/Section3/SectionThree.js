import React from 'react';
import { Link } from 'react-router-dom';
import {
  SectionContainer,
  ImageContainer,
  ImageAnimation1,
  ImageAnimation2,
  ImageAnimation3,
  ImageAnimation4,
  ImageAnimation5,
  ImageAnimation6,
  ImageAnimation7,
  TextAndButtonContainer,
  TextContainer,
  SectionThreeText,
  SectionThreeTextBookDam1,
  SectionThreeTextBookDam2,
  SectionThreeTextBookDam3,
  ButtonContainer,
  ButtonsInIntro,
  ButtonsInIntro2,
  ButtonSubContainer,
  TakeTourButtonImage
} from './SectionThreeStyle';
import { IoFootstepsOutline, IoLogInOutline } from 'react-icons/io5';

export const Section3 = ({ isLogin, guestLoginHandelr, handleLoginModal }) => {
  return (
    <>
      <SectionContainer>{/* SectionInfo3 */}
        <ImageContainer>
          <ImageAnimation1 />
          <ImageAnimation2 />
          <ImageAnimation3 />
          <ImageAnimation4 />
          <ImageAnimation5 />
          <ImageAnimation6 />
          <ImageAnimation7 />
        </ImageContainer>
        <TextAndButtonContainer>
          <TextContainer>
            <SectionThreeText>인생을 바꾸는 의미있는 작은 변화</SectionThreeText><br />
            <SectionThreeTextBookDam1>'북담'</SectionThreeTextBookDam1>
            <SectionThreeTextBookDam2>오늘부터 '북담'을 시작해볼까요?</SectionThreeTextBookDam2>
            <SectionThreeTextBookDam3>오늘부터 시작해볼까요?</SectionThreeTextBookDam3>
          </TextContainer>
          <ButtonContainer>
            <Link to='/feedPage'>
              {isLogin
                ? <ButtonsInIntro>
                  <ButtonSubContainer>
                    <IoFootstepsOutline /> &nbsp;입장하기
                  </ButtonSubContainer>
                </ButtonsInIntro>
                : <ButtonsInIntro onClick={guestLoginHandelr}>
                  <ButtonSubContainer>
                    <IoFootstepsOutline /> &nbsp;둘러보기
                  </ButtonSubContainer>
                  </ButtonsInIntro>}
            </Link>
            {isLogin
              ? null
              : <ButtonsInIntro onClick={handleLoginModal}>
                <ButtonSubContainer>
                  <IoLogInOutline />&nbsp;로그인
                </ButtonSubContainer>
              </ButtonsInIntro>}
          </ButtonContainer>
        </TextAndButtonContainer>
      </SectionContainer>
    </>
  );
};
