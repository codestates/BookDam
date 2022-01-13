import styled, { keyframes } from 'styled-components';

export const Load = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
export const LoadingContainer = styled.div`
width: 647px;
height: 100px;
margin-top: 10px;
/* border: 2px solid; */
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 600;
font-size: 20px;

/* @media screen and (max-width: 500px) {
  height: 300px;
} */
`;
export const LoadingCom = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 5px;
  border: 6px solid #000;
  border-top: 6px solid #56D26F;
  animation: ${Load} 2s ease-in infinite;
`;
