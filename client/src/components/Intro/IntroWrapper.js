import React from 'react';
import {
  IntroWholeContainer,
  SectionWrapperOne, SectionWrapperTwo, SectionWrapperThree,
  SectionContainer, SectionInfoContainer, ImageContainer, TextContainer,
  ButtonWrapper, ButtonContainer, Button
} from './IntroWrapperStyle';
import { Link } from 'react-router-dom';

function IntroWrapper () {
  return (
    <>
      <IntroWholeContainer>
        <SectionWrapperOne>
          <SectionContainer>
            <SectionInfoContainer>{/* SectionInfo1 */}
              <ImageContainer>Image1</ImageContainer>
              <TextContainer>Text1</TextContainer>
            </SectionInfoContainer>
            <ButtonWrapper>
              <ButtonContainer>
                <Button>
                  <Link to='/feedpage'>
                    시작하기
                  </Link>
                </Button>
                <Button>
                  <Link to='/login'>
                    로그인
                  </Link>
                </Button>
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
              <ImageContainer>Image1</ImageContainer>
              <TextContainer>Text1</TextContainer>
            </SectionInfoContainer>
            <ButtonWrapper>
              <ButtonContainer>
                <Button>시작하기</Button>
                <Button>로그인</Button>
              </ButtonContainer>
            </ButtonWrapper>
          </SectionContainer>
        </SectionWrapperThree>
      </IntroWholeContainer>
    </>
  );
}

export default IntroWrapper;
