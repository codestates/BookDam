import styled from 'styled-components';

// 페이지 상단 Header & 반응형 미디어 사이즈 넣기
export const HeaderContainer = styled.div `
  height: 40px;
  position: fixed;
  width: 100%;
  z-index: 100;
  /* border: 1px solid black; */
`;


// Intro 상단에는 Navbar가 보이지 않음
// 시작하기 또는 로그인을 했을 때 Navbar가 보이게 처리