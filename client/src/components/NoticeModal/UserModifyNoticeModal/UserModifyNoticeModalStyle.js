import styled from 'styled-components';

export const NoticeModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5); // 투명 회색 효과
  backdrop-filter: blur(5px); //blur 효과
  z-index: 101;
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
&:active {
  background: #2683C9;
}
`;
