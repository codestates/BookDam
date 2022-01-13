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
  UserSection,
  UserImage,
  UserNickName,
  LoginoutSection,
  Loginout,
  SideMenuSection

} from './NavbarStyle';

export default function Navbar () {
  const userState = useSelector(state => state.userInfoReducer);
  const { isLogin, userInfo } = userState;
  const [isOpenNavSidebar, setIsOpenNavSidebar] = useState(false);
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

  //  // 로그아웃 핸들러
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
        console.log(res);
        localStorage.removeItem('logged');
        if (res.data.message === '로그아웃 되었습니다.') {
          dispatch(LogoutAction());
          menuBtnHandler();
        } else {
          console.log('로그아웃 실패');
        }
      })
      .catch(err => console.log('err'));
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
            <NavMenu>
              <Link to='/editpage' style={{ textDecoration: 'none' }}>수정하기</Link>
            </NavMenu>
          </NavMenuSection>
          <UserSection>
            {/* <UserImage />
            <UserNickName>{userInfo.userNickName}</UserNickName> */}
            <LoginoutSection >
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
