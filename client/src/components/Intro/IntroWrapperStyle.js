import styled from 'styled-components';

export const IntroWholeContainer = styled.div`
  border: 1px solid black;
  overflow: hidden;
  position: relative;
  height: 2400px;
`;

export const SectionWrapperOne = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid red;
  height: 750px;
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
  margin: 10px;
`;

export const SectionInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid blue;
  margin: 10px;
  width: 100%;
  height: 600px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: 1px solid black;
  height: 550px;
  width: 450px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: 1px solid black;
  height: 550px;
  width: 450px;
`;

export const ButtonWrapper = styled.div`
  margin: 10px;
  border: 2px solid green;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  margin: 5px;
  border: 2px solid red;
  width: 400px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 60px;
  height: 40px;
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

export const SectionWrapperTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 750px;
`;

export const SectionWrapperThree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 750px;
`;
