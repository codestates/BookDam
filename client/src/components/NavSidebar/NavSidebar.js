import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogoutAction } from '../../actions/UserInfoAction';
import {
  UserInfoModifyModalBackground,
  SidebarContainer,
  SidebarTop,
  SidebarHeader,
  SidebarLeft,
  SidebarCloseButton,
  UserSection,
  UserImageWrap,
  UserImage,
  UserNickNamge,
  MenuSection,
  Write,
  Feed,
  MyPage,
  SidebarBottom,
  QuestionSection,
  Opinion,
  Question,
  LoginoutSection,
  Loginout
} from './NavSidebarStyle';

export function NavSidebar ({ menuBtnHandler }) {
  const userState = useSelector(state => state.userInfoReducer);
  const { isLogin, userInfo } = userState; // 저장된 유저 정보
  const dispatch = useDispatch();

  // 로그아웃 핸들러
  const logoutHandler = async () => {
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
          menuBtnHandler();
        } else {
        }
      })
      .catch(err => {

      });
  };

  return (
    <>
      <UserInfoModifyModalBackground onClick={menuBtnHandler}>
        <SidebarContainer onClick={(e) => e.stopPropagation()}>
          <SidebarTop>
            <SidebarHeader>
              <SidebarLeft />
              <SidebarCloseButton onClick={menuBtnHandler}>&times;</SidebarCloseButton>
            </SidebarHeader>
            <UserSection>
              <UserImageWrap>
                <UserImage />
              </UserImageWrap>
              <UserNickNamge>{userInfo.userNickName}</UserNickNamge>
            </UserSection>
            <MenuSection>
              <Write onClick={menuBtnHandler}>
                <Link to='/createPage' style={{ textDecoration: 'none' }}>작성하기</Link>
              </Write>
              <Feed onClick={menuBtnHandler}>
                <Link to='/feedPage' style={{ textDecoration: 'none' }}>피드</Link>
              </Feed>
              <MyPage onClick={menuBtnHandler}>
                <Link to='/mypage' style={{ textDecoration: 'none' }}>마이페이지</Link>
              </MyPage>
            </MenuSection>
          </SidebarTop>
          <SidebarBottom>
            <QuestionSection>
              <a href='https://docs.google.com/forms/d/1iaCTipqHapadjwVuurusJScLOnKMSQtQvDqSOma5K4c/viewform?edit_requested=true' target='_blank' rel='noreferrer'>
                <Opinion>의견 및 오류 제보</Opinion>
              </a>
              <a href='mailto:official.bookdam@gmail.com' target='_blank' rel='noreferrer'>
                <Question>이메일 문의</Question>
              </a>
            </QuestionSection>
            <LoginoutSection>
              {isLogin
                ? <Link to='/'><Loginout onClick={logoutHandler}>로그아웃</Loginout></Link>
                : <Link to='/' style={{ textDecoration: 'none' }}><Loginout>시작하기</Loginout></Link>}
            </LoginoutSection>
          </SidebarBottom>
        </SidebarContainer>
      </UserInfoModifyModalBackground>
    </>
  );
}
