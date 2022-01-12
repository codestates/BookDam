import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../assets/images/BookDam-B-fin.png';
import { FaArrowLeft } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { Link, useHistory } from 'react-router-dom';
import { NavSidebar } from '../NavSidebar/NavSidebar';

import {
  NavbarContainer,
  BackSection,
  LogoSection,
  NavbarWrapper,
  LogoImage,
  NavMenuSection,
  NavMenu,
  UserSection,
  UserImage,
  UserNickName,
  SideMenuSection

} from './NavbarStyle';

export default function Navbar () {
  const userState = useSelector(state => state.userInfoReducer);
  const { userInfo } = userState;
  const [isOpenNavSidebar, setIsOpenNavSidebar] = useState(false);
  const history = useHistory();

  // 메뉴 버튼 함수
  const menuBtnHandler = () => {
    setIsOpenNavSidebar(!isOpenNavSidebar);
  };

  // 뒤로가기 버튼 함수
  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <>
      <NavbarContainer>
        {isOpenNavSidebar ? <NavSidebar menuBtnHandler={menuBtnHandler} /> : null}
        <BackSection>
          <FaArrowLeft onClick={goBackHandler} />
        </BackSection>

        <NavbarWrapper>
          <LogoSection>
            <Link to='/'><LogoImage src={Logo} /></Link>
          </LogoSection>
          <NavMenuSection>
            <NavMenu>
              <Link to='/createPage' style={{ textDecoration: 'none' }}>작성하기</Link>
            </NavMenu>
            <NavMenu>
              <Link to='/feedPage' style={{ textDecoration: 'none' }}>피드</Link>
            </NavMenu>
            <NavMenu>
              <Link to='/mypage' style={{ textDecoration: 'none' }}>마이페이지</Link>
            </NavMenu>
            {/* <NavMenu>
              <Link to='/editpage' style={{ textDecoration: 'none' }}>수정하기</Link>
            </NavMenu> */}
          </NavMenuSection>
          <UserSection>
            <UserImage />
            <UserNickName>{userInfo.userNickName}</UserNickName>
          </UserSection>
        </NavbarWrapper>

        <SideMenuSection onClick={menuBtnHandler}>
          <IoMenu />
        </SideMenuSection>
      </NavbarContainer>
    </>
  );
}
