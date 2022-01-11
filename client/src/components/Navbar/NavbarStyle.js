import styled from 'styled-components';

export const NavbarContainer = styled.div`
  height: 70px;
  width: 100%;
  /* background: #2cc05a; */
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
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
  border: 1px solid orange;

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

export const LogoSection = styled.div`
  width: 140px;
  height: 60%;
  margin-left: 30px;
  /* border: 1px solid orange; */

  @media (max-width: 500px) {
    width: 160px;
    margin-right: 30px;
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
  justify-content: flex-end;
  /* border: 1px solid orange; */

  @media (max-width: 500px) {
    display: none;
  }
`;

export const NavMenu = styled.li`
  height: 50%;
  display: flex;
  margin: 0.5rem;
  font-size: 1.3rem;
  justify-content: center;
  align-items: center;
  color: red;
  /* border: 1px solid yellow; */
`;

export const UserSection = styled.div`
  height: 40px;
  width: 130px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  /* border: 1px solid orange; */

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
  /* border: 1px solid yellow; */
  `;

export const UserNickName = styled.div`
  height: 50%;
  width: 60px;
  display: flex;
  margin: 0.2rem;
  font-size: 0.8rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border: 1px solid yellow; */
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
