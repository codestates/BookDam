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
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  background-color: #1dc078;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
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
  font-size: 14px;
  border-radius: 5px;
  
  &:hover {
  background: #00bd68;
`;
