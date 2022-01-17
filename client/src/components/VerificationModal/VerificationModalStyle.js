import styled from 'styled-components';

export const VerificationBackground = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5); // 투명 회색 효과
  backdrop-filter: blur(5px); //blur 효과
  z-index: 100;
  @media screen and (max-width: 500px) {
    background-color: snow;
  }
`;

export const VerificationContainer = styled.div`
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
height: 300px;
width: 400px;
position: fixed;
background-color: snow;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
z-index: 101;
`;

// 본인인증 제목
export const VerificationTitle = styled.h2`

`;

// 본인 아이디
export const ID = styled.h3`

`;

// 비밀번호 입력input
export const InputPassword = styled.input.attrs({
  placeholder: '비밀번호를 입력하세요',
  type: 'password'
})`
  margin: 10px 0 0 10px;
  border-radius: 2px;
  width: 170px;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #12e272;
  border-radius: 5px;
  background-color: rgba(0,0,0,0);
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  margin: 10px;
  border-radius: 2px; 
&:hover {
  color: #12e272;
}
`;
