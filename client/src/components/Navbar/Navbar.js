import React from 'react';
import Logo from '../../assets/images/logo-bigb.png';
import { FaArrowLeft } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';

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
  return (
    <>
      <NavbarContainer>
        <BackSection>
          <FaArrowLeft />
        </BackSection>
        <LogoSection>
          <Link to='/'><LogoImage src={Logo} /></Link>
        </LogoSection>
        <NavMenuSection>
          <NavMenu>
            <Link to='/createPage'>Write</Link>
          </NavMenu>
          <NavMenu>
            <Link to='/feedPage'>Feed</Link>
          </NavMenu>
          <NavMenu>
            <Link to='/mypage'>mypage</Link>
          </NavMenu>
        </NavMenuSection>
        <UserSection>
          <UserImage />
          <UserNickName>민트초코깡</UserNickName>
        </UserSection>
        <SideMenuSection>
          <IoMenu />
        </SideMenuSection>
      </NavbarContainer>
    </>
  );
}
