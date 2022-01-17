import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  height: 70px;
  width: 100%;
  /* background: #2cc05a; */
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  /* border: 1px solid black; */
`;

// web일 때 뒤로가기 버튼 안 보이기
export const BackSection = styled.div`  
  height: 40px;
  width: 5%;
  display: none;
  align-items: center;
  flex-direction: row;
  margin-left: 30px;
  font-size: 30px;
  /* border: 1px solid orange; */

  @media (max-width: 500px) {
    height: 40px;
    width: 5%;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: 30px;
    font-size: 30px;
    /* border: 1px solid orange; */
  }
`;

export const NavbarWrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 870px;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const LogoSection = styled.div`
  width: 140px;
  height: 60%;
  /* margin-left: 30px; */
  /* border: 1px solid orange; */
  text-align: center;

  @media (max-width: 500px) {
    width: 160px;
  }
`;

export const LogoImage = styled.img`
  height: 80%;
  width: 80%;
`;

export const NavMenuSection = styled.ul`
  height: 40px;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid orange; */

  @media (max-width: 500px) {
    display: none;
  }
`;

export const NavMenu = styled.li`
  height: 70%;
  display: flex;
  margin: 0.5rem;
  font-size: 1.3rem;
  justify-content: center;
  align-items: center;
`;

export const NavMenu3 = styled.li`
  height: 70%;
  display: flex;
  margin: 0.5rem;
  font-size: 1.3rem;
  justify-content: center;
  align-items: center;
  /* color: red; */
  /* border: 1px solid black; */
`;

export const NavMenuSub = styled.li`
  height: 70%;
  display: flex;
  margin: 0.5rem;
  font-size: 1.3rem;
  justify-content: center;
  font-weight: 600;
`;

export const StyledLink = styled(Link)`
  &:link { //아직 방문하지 않은
    color: black;
    text-decoration: none;
  }

  &:visited { //사용자가 방문한적이 있는
    color: black;
    text-decoration: none;
  }

  &:hover { //마우스를 링크에 올려두었을 때
    color: black;
  }

  &:active { //클릭 후 뗄 떼까지
    color: black;
  }
`;

export const UserSection = styled.div`
  height: 40px;
  width: 80px;
  display: flex;
  align-items: center;
  /* flex-direction: row; */
  justify-content: flex-end;
  /* border: 1px solid black; */

  @media (max-width: 500px) {
    display: none;
  }
`;

export const UserImage = styled.img`
  height: 30px;
  width: 30px;
  display: flex;
  margin: 0.5rem;
  align-items: center;
  border: 1px solid black;
  `;

export const UserNickName = styled.div`
  height: 50%;
  width: 100px;
  display: flex;
  margin: 0.2rem;
  font-size: 0.8rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid black;
`;

// 로그아웃 섹션
export const LoginoutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* width: 100%; */
  height: 100%;
  /* margin-bottom: 20px; */
  /* border: 1px solid blue; */
`;

export const Loginout = styled.button`
  width: 60px;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: rgba(0,0,0,0);
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  font-size: 13px;
  /* margin: 10px; */
  border-radius: 2px;
  cursor: pointer;
`;

export const SideMenuSection = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    height: 40px;
    width: 5%;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: 30px;
    font-size: 30px;
    /* border: 10px solid black; */
  }
`;
