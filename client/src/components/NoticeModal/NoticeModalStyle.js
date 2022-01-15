import styled from 'styled-components';

export const NoticeModalBackground = styled.div`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5); // 투명 회색 효과
  backdrop-filter: blur(5px); //blur 효과
  z-index: 100;
`;

export const NoticeModalContainer = styled.div`
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
> div {
  margin: 20px;
}
.BTN {
  display: flex;
  flex-direction: column;
}
`;

export const Button = styled.button`
width: 120px;
height: 30px;
margin: 10px;
border-style: none;
border-radius: 5px;
font-size: 14px;
background: #2D9BF0;
color: #ffffff;
transition: all 0.1s ease-in-out;
cursor: pointer;
text-align: center;
&:hover {
  color: #ffffff;
}
&:active {
  background: #2683C9;
}
`;
