import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // 로그인 상태변경용
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  IntroWholeContainer,
  SectionWrapperOne,
  SectionWrapperTwo,
  SectionWrapperThree
} from './IntroWrapperStyle';
import { LoginModal } from '../LoginModal/LoginModal';
import { SignupModal } from '../Signup/SignupModal';
import { GuestLoginAction, LogoutAction } from '../../actions/UserInfoAction';
import { Section1 } from '../Landing/Section1/SectionOne';
import { Section2 } from '../Landing/Section2/Section2';
import { Section3 } from '../Landing/Section3/SectionThree';

export const IntroWrapper = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenSignupModal, setIsOpenSignupModal] = useState(false);
  const [guestInfo, setGuestInfo] = useState({ userId: 'guest', password: '1234' });
  const state = useSelector(state => state.userInfoReducer); // 로그인 상태변경용
  const { isLogin, isGuest, userInfo } = state; // 로그인 상태변경용
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
      url: 'https://server.bookdam.link/user/logout',
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
      url: 'https://server.bookdam.link/user/login',
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
        history.push('/feedPage');
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

        <SectionWrapperOne>
          <Section1 />
        </SectionWrapperOne>

        <SectionWrapperTwo>
          <Section2 />
        </SectionWrapperTwo>

        <SectionWrapperThree>
          <Section3 isLogin={isLogin} guestLoginHandelr={guestLoginHandelr} handleLoginModal={handleLoginModal} />
        </SectionWrapperThree>

      </IntroWholeContainer>
    </>
  );
};
