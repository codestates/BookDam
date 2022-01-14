import styled from 'styled-components';

export const UserInfoModifyModalBackground = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5); // 투명 회색 효과
  backdrop-filter: blur(5px); //blur 효과
  z-index: 100;

  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background: snow;
  position: fixed;
  top: 0;
  right: 0;
  transition: all .35s;
  z-index: 101;
  /* border: 10px solid blue; */

  @media screen and (max-width: 500px) {
    /* right: -200px; */
  right: 0;
  
  }
`;

// 유저, 작성, 피드, 마이페이지 컨테이너
export const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 10px;
  /* border: 1px solid red; */
`;

export const SidebarHeader = styled.div`
 display: flex;
 flex-direction: row;
 /* border: 1px solid red; */
`;

export const SidebarLeft = styled.div`
  width: 96%;
  /* border: 1px solid red; */
`;

// signup: 닫기
export const SidebarCloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  font-size: 40px;
  color: rgba(0, 0, 0, 0.5);
  /* border: 1px solid red; */
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
`;

export const UserImageWrap = styled.div`
  width: 90px;
  height: 90px;
  margin: 5px;
  border: 1px solid black;
`;

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const UserNickNamge = styled.div`
  margin: 5px;
  font-size: 1.1rem;
  justify-content: start;
  align-items: center;
  text-align: center;
`;

export const MenuSection = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  font-weight: 600;
  > div > a {
    color: black;
  }
  /* border: 1px solid blue; */
`;

export const Write = styled.div`
  /* margin-top: 30px;
  margin-bottom: 20px; */
  font-size: 1.2rem;
`;

export const Feed = styled.div`
  /* margin-top: 20px;
  margin-bottom: 30px; */
  font-size: 1.2rem;
`;

export const MyPage = styled.div`
  /* margin-top: 30px;
  margin-bottom: 30px; */
  font-size: 1.2rem;
`;

// 의견/오류제보, 이메일 문의, 로그아웃 컨테이너
export const SidebarBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 10px;
  /* border: 1px solid red; */
`;

// 문의 섹션
export const QuestionSection = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  z-index: 6;
  font-size: 1rem;
  font-weight: 600;
  /* border: 1px solid blue; */

  > a {
      text-decoration: none;
      color: black;
  }
`;

export const Opinion = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Question = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
`;

// 로그아웃 섹션
export const LoginoutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  /* border: 1px solid blue; */
`;

export const Loginout = styled.button`
  width: 130px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: rgba(0,0,0,0);
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  margin: 10px;
  border-radius: 2px;
`;
