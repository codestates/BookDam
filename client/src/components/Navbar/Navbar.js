import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../assets/images/BookDam-B-fin.png';
import { FaArrowLeft } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { NavSidebar } from '../NavSidebar/NavSidebar';

import {
  NavbarContainer,
  BackSection,
  LogoSection,
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

  // 메뉴 버튼 함수
  const menuBtnHandler = () => {
    setIsOpenNavSidebar(!isOpenNavSidebar);
  };

  return (
    <>
      <NavbarContainer>
        {isOpenNavSidebar ? <NavSidebar menuBtnHandler={menuBtnHandler} /> : null}
        <BackSection>
          <FaArrowLeft />
        </BackSection>
        <LogoSection>
          <Link to='/'><LogoImage src={Logo} /></Link>
        </LogoSection>
        <NavMenuSection>
          <NavMenu>
            <Link to='/createPage' style={{ textDecoration: 'none' }}>Write</Link>
          </NavMenu>
          <NavMenu>
            <Link to='/feedPage' style={{ textDecoration: 'none' }}>Feed</Link>
          </NavMenu>
          <NavMenu>
            <Link to='/mypage' style={{ textDecoration: 'none' }}>mypage</Link>
          </NavMenu>
        </NavMenuSection>
        <UserSection>
          <UserImage />
          <UserNickName>{userInfo.userNickName}</UserNickName>
        </UserSection>
        <SideMenuSection onClick={menuBtnHandler}>
          <IoMenu />
        </SideMenuSection>
      </NavbarContainer>
    </>
  );
}
