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
width: 640px;
margin-top: 10px;
/* border: 2px solid; */
display: flex;
justify-content: center;
align-items: center;
`
export const LoadingCom = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 auto;
  border: 3px solid #000000;
  border-top: 3px solid #56D26F;
  animation: ${Load} 2s ease-in infinite;
`;
