import React from 'react';
import { useSelector } from 'react-redux';
import {
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

export function NavSidebar () {
  const userState = useSelector(state => state.userInfoReducer);
  const { userInfo } = userState; // 저장된 유저 정보

  return (
    <>
      <SidebarContainer>
        <SidebarTop>
          <UserSection>
            <UserImageWrap>
              <UserImage />
            </UserImageWrap>
            <UserNickNamge>{userInfo.userNickName}</UserNickNamge>
          </UserSection>
          <MenuSection>
            <Write>Write</Write>
            <Feed>Feed</Feed>
            <MyPage>MyPage</MyPage>
          </MenuSection>
        </SidebarTop>
        <SidebarBottom>
          <QuestionSection>
            <Opinion>의견 및 오류 제보</Opinion>
            <Question>이메일 문의</Question>
          </QuestionSection>
          <LogoutSection>
            <Logout>Logout</Logout>
          </LogoutSection>
        </SidebarBottom>
      </SidebarContainer>
    </>
  );
};