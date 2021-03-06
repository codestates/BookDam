import styled from 'styled-components';

export const ButtonContainer = styled.div`
  margin: 0px;
  border: 1 solid grey;
`;

export const Button = styled.button`
width:  ${props => props.theme.width};
height:  ${props => props.theme.height};
margin: 10px;
border-style: none;
border-radius: 10px;
font-size: 14px;
background: #2D9BF0;
color: #ffffff;
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
transition: all 0.1s ease-in-out;
cursor: pointer;
text-align: center;
outline: none;
white-space: nowrap;
overflow: hidden;
&:hover {
  color: #ffffff;
}
&:active {
  background: #2683C9;
}
`;

export const SignOutBtn = styled.button`
width:  ${props => props.theme.width};
height:  ${props => props.theme.height};
margin: 10px;
border-style: none;
border-radius: 10px;
font-size: 14px;
background: #D9D9D9;
color: #ffffff;
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
transition: all 0.1s ease-in-out;
cursor: pointer;
text-align: center;
outline: none;
white-space: nowrap;
overflow: hidden;
&:hover {
  color: #ffffff;
}
&:active {
  background: #B5B5B5;
}
`;

export const LoginThemeBtn = styled.button`  // 로그인 페이지 버튼 테마
  width: 263px;
  height: 40px;
  background-color: #1dc078;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
  line-height: 44px;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: top;
  white-space: nowrap;
  border: 0;
  margin: 10px;
  font-weight: 600;
  font-size: 20px;
  border-radius: 5px;
  
  &:hover {
  background: #00bd68;
  }
`;

export const SocialLoginBtn = styled.button`
  border-color: #feec34;
  background: #feec34;
  width: 60%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 10px;
  border-radius: 3px;
`;

Button.defaultProps = {
  theme: {
    width: '100px',
    height: '30px'
  }
};
SignOutBtn.defaultProps = {
  theme: {
    width: '100px',
    height: '30px'
  }
};
