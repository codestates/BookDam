import React from 'react';
import Logo from '../../assets/images/logo-bigb.png';
import { FaArrowLeft } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';

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
          <LogoImage src={Logo} />
        </LogoSection>
        <NavMenuSection>
          <NavMenu>Write</NavMenu>
          <NavMenu>Feed</NavMenu>
          <NavMenu>MyPage</NavMenu>
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
