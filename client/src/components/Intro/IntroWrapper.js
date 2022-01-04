import React, { useState } from 'react';
import { IntroWholeContainer, 
         SectionWrapperOne, SectionWrapperTwo, SectionWrapperThree, 
         SectionContainer, SectionInfoContainer, ImageContainer, TextContainer,
         ButtonWrapper, ButtonContainer, ButtonsInIntro } from './IntroWrapperStyle';
import { LoginModal } from '../Login/LoginModal';
import { useSelector, useDispatch } from 'react-redux';

function IntroWrapper () {
  const state = useSelector(state => state.userInfo)
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  const handleLogin = () => {
    setIsOpenLoginModal(true);
    document.body.style.overflow = "hidden";
  }

    return (
        <>
          <IntroWholeContainer>
            {isOpenLoginModal ? <LoginModal /> : null}
            <SectionWrapperOne>
                <SectionContainer>
                  <SectionInfoContainer>{/* SectionInfo3 */}
                    <ImageContainer>Image1</ImageContainer>
                    <TextContainer>Text1</TextContainer>
                  </SectionInfoContainer>
                  <ButtonWrapper>
                    <ButtonContainer>
                      <ButtonsInIntro>시작하기</ButtonsInIntro>
                      <ButtonsInIntro onClick={handleLogin}>로그인</ButtonsInIntro>
                    </ButtonContainer>
                  </ButtonWrapper>
                </SectionContainer>
              </SectionWrapperOne>

            <SectionWrapperTwo>
              <SectionInfoContainer>{/* SectionInfo2 */}
                <ImageContainer>Image2</ImageContainer>
                <TextContainer>Text1</TextContainer>
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
    )
};

export default IntroWrapper;
