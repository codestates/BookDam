import styled from 'styled-components';

// 모달: 전체 배경
export const LoginModalWholeBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5); // 투명 회색 효과
  backdrop-filter: blur(5px); //blur 효과

  @media screen and (max-width: 500px) {
    /* background: white; */
    display: hidden;
  }
`;

export const LoginModalWrapper = styled.div`
  width: 480px;
  height: 621px;
  background-color: white;
  box-sizing: border-box;
  margin: 150px auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 3%;
  /* border: 1px solid black; */

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    background-color: white;
    margin: 0;
    border-radius: 0;
  }
`;

// 모달: Login 모달창 컨테이너
export const LoginModalContainer = styled.div`
  /* border: 2px solid red; */

  @media screen and (max-width: 500px) {
    position: fixed;
    top: 200px;
    width: 100%;
    height: 100%;
    background-color: white;
    margin: 0;
    border-radius: 0;
  }
`;

export const LoginModalHeader = styled.div`
 display: flex;
 flex-direction: row;
`;

export const LoginModalLeft = styled.div`
  width: 96%;

`;
// Login: 닫기
export const LoginCloseButton = styled.div`
  width: 4%;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  padding-top: 8px;
  font-size: 40px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  /* border: 2px solid black; */

  &:hover {
    color: black;
  }
`;

// Login: input Container
export const InputContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 0 20px 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid #4D94E6; */
`;

// Login: title
export const LoginTitle = styled.div`
  color: #2cc05a;
  /* font-family: monospace; */
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin: 1rem;
`;

// Login input: ID
export const InputId = styled.input.attrs({
  placeholder: '아이디',
  type: 'text'
})`
  margin-top: 10px;
  border-radius: 2px;
  width: 60%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

// Login input: Password
export const InputPW = styled.input.attrs({
  placeholder: '비밀번호',
  type: 'password'
})`

  margin-top: 10px;
  border-radius: 2px;
  width: 60%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;
