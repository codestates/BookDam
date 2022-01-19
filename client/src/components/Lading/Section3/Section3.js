import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // 로그인 상태변경용
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  IntroWholeContainer,
  SectionWrapperThree,
  SectionContainer,
  SectionInfoContainer,
  ImageContainer,
  ImageAnimation,
  TextContainer,
  SectionThreeText,
  TextHeaderContainer,
  ButtonWrapper,
  ButtonContainer,
  ButtonsInIntro
} from './Section3Style';
import { LoginModal } from '../../LoginModal/LoginModal';
import { SignupModal } from '../../Signup/SignupModal';
import { GuestLoginAction, LogoutAction } from '../../../actions/UserInfoAction';

export const Section3 = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenSignupModal, setIsOpenSignupModal] = useState(false);
  const [guestInfo, setGuestInfo] = useState({ userId: 'guest', password: '1234' });
  const state = useSelector(state => state.userInfoReducer); // 로그인 상태변경용
  const { isLogin, userInfo } = state; // 로그인 상태변경용
  const dispatch = useDispatch();
  const history = useHistory();

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
        sessionStorage.removeItem('logged');
        if (res.data.message === '로그아웃 되었습니다.') {
          dispatch(LogoutAction());
        } else {
        }
      })
      .catch(err => {

      });
  };

  const guestLoginHandelr = async () => { // 게스트로 둘러보기시에 처리
    await axios({
      withCredentials: true,
      method: 'post',
      url: 'http://localhost:4000/user/login',
      headers: {
        authorization: `Bearer: ${process.env.Client_Secret}`,
        'Content-Type': 'application/json'
      },
      data: {
        userInfo: {
          userId: 'guest',
          password: '1234'
        }
      }
    })
      .then((res) => {
        const userInfoData = res.data.userInfo;
        if (userInfoData) {
          sessionStorage.setItem('logged', JSON.stringify(res.data.userInfo));
          dispatch(GuestLoginAction(userInfoData));
          setIsOpenLoginModal(false);
          document.body.style.overflow = 'unset'; // 스크롤 방지 해제
        }
        history.push('/feedpage');
      });
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

        <SectionWrapperThree>
          <SectionContainer>
            <SectionInfoContainer>{/* SectionInfo3 */}
              <ImageContainer>
                <ImageAnimation />
              </ImageContainer>
              <TextContainer>
                <SectionThreeText>북담으로 당신이 읽은 책의</SectionThreeText>
                <SectionThreeText>멋진 문장을 모아 보세요. </SectionThreeText>
                <SectionThreeText>북담</SectionThreeText>
              </TextContainer>
            </SectionInfoContainer>
            <ButtonWrapper>
              <ButtonContainer>
                <Link to='/feedpage'>
                  {isLogin
                    ? <ButtonsInIntro>입장하기</ButtonsInIntro>
                    : <ButtonsInIntro onClick={guestLoginHandelr}>둘러보기</ButtonsInIntro>}
                </Link>
                {isLogin
                  ? null
                  : <ButtonsInIntro onClick={handleLoginModal}>로그인</ButtonsInIntro>}
              </ButtonContainer>
            </ButtonWrapper>
          </SectionContainer>
        </SectionWrapperThree>
      </IntroWholeContainer>
    </>
  );
};
