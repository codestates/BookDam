import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // 로그인 상태변경 테스트용
import { Link } from 'react-router-dom';
import axios from 'axios';
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
import { LogoutAction } from '../../actions/UserInfoAction';

export const IntroWrapper = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenSignupModal, setIsOpenSignupModal] = useState(false);
  const state = useSelector(state => state.userInfoReducer); // 로그인 상태변경용
  const { isGuest, isLogin, articleInfo, userInfo } = state; // 로그인 상태변경용
  const dispatch = useDispatch();

  const handleLoginModal = () => { // 버튼 클릭시 로그인 모달 열기
    setIsOpenSignupModal(false);
    setIsOpenLoginModal(true);
    document.body.style.overflow = 'hidden'; // Login 모달창 열면서 스크롤 방지
  };

  const handleSignupModal = () => { // 버튼 클릭시 회원가입 모달 열기
    setIsOpenLoginModal(false);
    setIsOpenSignupModal(true);
    document.body.style.overflow = 'hidden'; // Signup 모달창 열면서 스크롤 방지
  };

  const handleCloseSignupModal = () => { // 버튼 클릭시 회원가입 모달 닫기
    setIsOpenSignupModal(false);
    document.body.style.overflow = 'unset';
  };

  const logoutHandler = async () => { // 로그아웃 처리
    await axios({
      withCredentials: true,
      method: 'post',
      url: 'http://localhost:4000/user/logout',
      headers: {
        authorization: `Bearer: ${process.env.Client_Secret}`,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res)
      if(res.data.message === '로그아웃 되었습니다.') {
        dispatch(LogoutAction());
      } else {
        console.log('로그아웃 실패');
      }
    })
    .catch(err => console.log('err'));
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
                {isLogin
                  ? <ButtonsInIntro onClick={logoutHandler}>로그아웃</ButtonsInIntro>
                  : <ButtonsInIntro onClick={handleLoginModal}>로그인</ButtonsInIntro>}
              </ButtonContainer>
            </ButtonWrapper>
          </SectionContainer>
        </SectionWrapperOne>

        <SectionWrapperTwo>
          <SectionInfoContainer>{/* SectionInfo2 */}
            <TextContainer>로그인 성공여부{isLogin ? 'true' : 'false'}</TextContainer>
            <ImageContainer>게스트 처리여부{isGuest ? 'true' : 'false'}</ImageContainer>
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
                <Link to='/feedpage'>
                  <ButtonsInIntro>시작하기</ButtonsInIntro>
                </Link>
                <ButtonsInIntro onClick={handleLoginModal}>로그인</ButtonsInIntro>
              </ButtonContainer>
            </ButtonWrapper>
          </SectionContainer>
        </SectionWrapperThree>
      </IntroWholeContainer>
    </>
  );
};
