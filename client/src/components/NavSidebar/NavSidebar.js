import React from 'react';
import { useSelector } from 'react-redux';
import {
  UserInfoWholeContainer,
  UserInfoModifyModalBackground,
  SidebarContainer,
  SidebarTop,
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
  LogoutSection,
  Logout
} from './NavSidebarStyle';

export function NavSidebar ({ menuBtnHandler }) {
  const userState = useSelector(state => state.userInfoReducer);
  const { userInfo } = userState; // 저장된 유저 정보

  // 로그아웃 핸들러
  const logoutHandler = () => {

  };

  return (
    <>
      <UserInfoModifyModalBackground onClick={menuBtnHandler}>
        <SidebarContainer>
          <SidebarTop>
            <UserSection>
              <UserImageWrap>
                <UserImage />
              </UserImageWrap>
              <UserNickNamge>{userInfo.userNickName}</UserNickNamge>
            </UserSection>
            <MenuSection>
              <Write>작성하기</Write>
              <Feed>피드</Feed>
              <MyPage>마이페이지</MyPage>
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
            <LogoutSection>
              <Logout onClick={logoutHandler}>
                로그아웃
              </Logout>
            </LogoutSection>
          </SidebarBottom>
        </SidebarContainer>
      </UserInfoModifyModalBackground>
    </>
  );
}
