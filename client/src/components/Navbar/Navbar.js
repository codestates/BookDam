import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutAction } from '../../actions/UserInfoAction';
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
  NavMenuSub,
  StyledLink,
  UserSection,
  LoginoutSection,
  Loginout,
  SideMenuSection

} from './NavbarStyle';

export default function Navbar () {
  const userState = useSelector(state => state.userInfoReducer);
  const { isLogin, isGuest, userInfo } = userState;
  const [isOpenNavSidebar, setIsOpenNavSidebar] = useState(false);
  const [navMenu1, setSubNavMenu1] = useState(false);
  const [navMenu2, setSubNavMenu2] = useState(false);
  const [navMenu3, setSubNavMenu3] = useState(false);
  const [navMenu4, setSubNavMenu4] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  // 메뉴 버튼 함수
  const menuBtnHandler = () => {
    setIsOpenNavSidebar(!isOpenNavSidebar);
  };

  // 뒤로가기 버튼 함수
  const goBackHandler = () => {
    history.goBack();
  };

  const handleNav1 = () => {
    setSubNavMenu1(true);
    setSubNavMenu2(false);
    setSubNavMenu3(false);
    setSubNavMenu4(false);
  };

  const handleNav2 = () => {
    setSubNavMenu1(false);
    setSubNavMenu2(true);
    setSubNavMenu3(false);
    setSubNavMenu4(false);
  };

  const handleNav3 = () => {
    setSubNavMenu1(false);
    setSubNavMenu2(false);
    setSubNavMenu3(true);
    setSubNavMenu4(false);
  };

  const handleNav4 = () => {
    setSubNavMenu1(false);
    setSubNavMenu2(false);
    setSubNavMenu3(false);
    setSubNavMenu4(true);
  };

  // 로그아웃 핸들러
  const logoutHandler = async () => {
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
          menuBtnHandler();
        } else {
        }
      })
      .catch(err => {
      });
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
            <Link to='/myPage'><LogoImage src={Logo} /></Link>
          </LogoSection>
          {userInfo.id.length !== 0 ?
          <NavMenuSection>
            {navMenu1
              ? <NavMenuSub><StyledLink to='/'>소개</StyledLink></NavMenuSub>
              : <NavMenu onClick={handleNav1}><StyledLink to='/'>소개</StyledLink></NavMenu>}

            {navMenu2
              ? <NavMenuSub><StyledLink to='/createPage'>작성하기</StyledLink></NavMenuSub>
              : <NavMenu onClick={handleNav2}><StyledLink to='/createPage'>작성하기</StyledLink></NavMenu>}

            {navMenu3
              ? <NavMenuSub><StyledLink to='/feedPage'>피드</StyledLink></NavMenuSub>
              : <NavMenu onClick={handleNav3}><StyledLink to='/feedPage'>피드</StyledLink></NavMenu>}

            {navMenu4
              ? <NavMenuSub><StyledLink to='/mypage'>마이페이지</StyledLink></NavMenuSub>
              : <NavMenu onClick={handleNav4}><StyledLink to='/mypage'>마이페이지</StyledLink></NavMenu>}
          </NavMenuSection> :
          null}
          <UserSection>
            <LoginoutSection>
              {isLogin
                ? <Link to='/'><Loginout onClick={logoutHandler}>로그아웃</Loginout></Link>
                : <Link to='/' style={{ textDecoration: 'none' }}><Loginout>시작하기</Loginout></Link>}
            </LoginoutSection>
          </UserSection>
        </NavbarWrapper>

        <SideMenuSection onClick={menuBtnHandler}>
          <IoMenu />
        </SideMenuSection>
      </NavbarContainer>
    </>
  );
}
