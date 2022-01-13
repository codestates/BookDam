import styled from 'styled-components';

// 모달: 전체 배경
export const SignupModalWholeBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5); // 투명 회색 효과
  backdrop-filter: blur(5px); //blur 효과

  @media screen and (max-width: 500px) {
    display: hidden;
  }
`;

// 모달: 모달 창 래퍼
export const SignupModalWrapper = styled.div`
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

// 모달: Signup 모달창 컨테이너
export const SignupModalContainer = styled.div`
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

export const SignupModalHeader = styled.div`
 display: flex;
 flex-direction: row;
`;

export const SignupModalLeft = styled.div`
  width: 96%;
`;

// signup: 닫기
export const SignupCloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  padding-top: 8px;
  font-size: 40px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

// Signup: input Container
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

// Signup: title
export const SignupTitle = styled.div`
  color: #2cc05a;
  /* font-family: monospace; */
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin: 1rem;
`;

// Sign input: ID
export const InputId = styled.input.attrs({
  placeholder: '아이디(글자수 제한 12자)',
  type: 'text',
  maxLength: 12
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

// Sign input: UserNickName
export const InputUserNickName = styled.input.attrs({
  placeholder: '닉네임(글자수 제한 12자)',
  type: 'text',
  maxLength: 12
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

// Signup input: Password
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

// Signup input: Checkout Password
export const InputPWCheckout = styled.input.attrs({
  placeholder: '비밀번호 확인',
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

// Signup Move To LoginModal
export const MoveToLoginModal = styled.span`
  /* border: 1px solid black; */
  margin-left: 5px;
  font-weight: bold;
  color: black;
  &:hover {
    color: #2cc05a;
    cursor: pointer;
  }
`;
