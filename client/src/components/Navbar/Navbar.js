import React from 'react';
import Logo from '../../assets/images/logo.png'

import {
  NavbarContainer,
  LogoSection,
  Menu_UserSection,
  NavMenuSection,
  NavMenu,
  UserSection,
  UserImg,
  UserNickName

} from './NavbarStyle';

export default function Navbar () {

  return (
    <>
    <NavbarContainer>
      {/* <>뒤로가기</>   */}
      <LogoSection> Logo
        {/* <Logo /> */}
      </LogoSection>
      
        <NavMenuSection>
          <NavMenu>Write</NavMenu>
          <NavMenu>Feed</NavMenu>
          <NavMenu>MyPage</NavMenu>
        </NavMenuSection>
        <UserSection>
          <UserImg />
          <UserNickName>민트초코깡</UserNickName>
        </UserSection>
      
    {/* <>메뉴 아이콘</> */}
    </NavbarContainer>
    
    </>
  )
};