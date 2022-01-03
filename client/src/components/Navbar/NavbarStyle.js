import styled from 'styled-components';



export const NavbarContainer = styled.div`
  height: 40px;
  width: 100%;
  position: fixed;
  background: #2cc05a;
  display: flex;
  align-items: center;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-around;
`;

//web일 때 뒤로가기 버튼 안 보이기
export const Back = styled.div`  

`;

export const LogoSection = styled.div`
  height: 40px;
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 1rem;
  /* border: 1px solid orange; */
`;

const Menu_UserSection = styled.div`

`;

export const NavMenuSection = styled.ul`
  height: 40px;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* border: 1px solid yellow; */
`;

export const NavMenu = styled.li`
  height: 50%;
  width: 35px;
  display: flex;
  margin: 0.2rem;
  font-size: 0.5rem;
  align-items: center;
  /* border: 1px solid yellow; */
`;

export const UserSection = styled.div`
  height: 40px;
  width: 40%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: right;
  /* border: 1px solid orange; */
`;

export const UserImg = styled.img`
  height: 30px;
  width: 30px;
  display: flex;
  margin: 0.5rem;
  align-items: center;
  border: 1px solid yellow;
  `;

export const UserNickName = styled.div`
  height: 40px;
  width: 60%;
  display: flex;
  font-size: 0.5rem;
  align-items: center;
  /* border: 1px solid yellow; */
`;

export const MenuIcon = styled.div`

`;