import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  width: 200px;
  height: 500px;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background: snow;
  position: fixed;
  top: 0;
  /* right: -200px; */
  right: 0;
  z-index: 1;
  transition: all .35s;
  /* border: 1px solid blue; */
`;

// 유저, 작성, 피드, 마이페이지 컨테이너
export const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 10px;
  /* border: 1px solid black; */
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
  /* border: 1px solid black; */
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  /* border: 1px solid blue; */
`;

export const Write = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 1rem;
`;

export const Feed = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 1rem;
`;

export const MyPage = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 1rem;
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
  /* border: 1px solid black; */
`;

// 문의 섹션
export const QuestionSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  /* border: 1px solid blue; */
`;

export const Opinion = styled.div`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 1rem;
`;

export const Question = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 1rem;
`;

// 로그아웃 섹션
export const LogoutSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  /* border: 1px solid blue; */
`;

export const Logout = styled.button`
  width: 130px;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: rgba(0,0,0,0);
  color: rgba(0, 0, 0, 0.5);
  margin: 10px;
  border-radius: 2px;
`;