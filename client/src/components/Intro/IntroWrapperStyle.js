import styled from 'styled-components';

export const IntroWholeContainer = styled.div`
  /* border: 10px solid black; */
  overflow: hidden;
  position: relative;
  height: 2500px;
  width: 100vw;
`;

export const SectionWrapperOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  height: 950px;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid black; */
  margin: 10px;
`;

export const SectionInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid blue;
  margin: 10px;
  height: 600px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: 1px solid black;
  height: 550px;
  width: 450px;
  background-image: linear-gradient(rgba(0,170, 0, 0.1), rgba(0, 255, 0, 0.5));
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  border: 1px solid black;
  height: 450px;
  width: 450px;
`;

export const TextHeaderContainer = styled.div`
  /* border: 1px solid black; */
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

export const ButtonsInIntro = styled.button`
  width: 60px;
  height: 40px;
  margin: 10px;
  border-style: none;
  border-radius: 10px;
  font-size: 14px;
  background: #2cc05a;
  color: black;
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
`;

export const SectionWrapperTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  height: 750px;
`;

export const SectionWrapperThree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  height: 750px;
`;