import styled, { keyframes } from 'styled-components';
import { bounceTop1,
         bounceTop2,
         bounceTop3,
         bounceTop4,
         bounceTop5,
         bounceTop6,
         bounceTop7
        } from './SectionThreeCSS';

export const IntroWholeContainer = styled.div`
  /* border: 10px solid black; */
  overflow: hidden;
  position: relative;
  height: 2300px;
  width: 100vw;
  z-index: 1;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* border: 10px solid black; */
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  /* border: 1px solid black; */
  height: 55%;
  width: 450px;
`;


export const ImageAnimation1 = styled.img.attrs({
  src: `${"https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/480/000000/external-share-social-media-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"}`
})`
  /* border: 1px solid black; */
  width: 25%;
  animation: ${bounceTop1} 6s 1s infinite;

  @media screen and (max-width: 500px) {
    width: 15%;
  }
`;

export const ImageAnimation2 = styled.img.attrs({
  src: `${"https://img.icons8.com/bubbles/500/000000/book-and-pencil.png"}`
})`
  /* border: 1px solid black; */
  width: 15%;
  animation: ${bounceTop2} 6s 1s infinite;

  @media screen and (max-width: 500px) {
    width: 15%;
    margin-right: 10px;
  }
`;

export const ImageAnimation3 = styled.img.attrs({
  src: `${"https://img.icons8.com/clouds/500/000000/book.png"}`
})`
  /* border: 1px solid blue; */
  width: 30%;
  animation: ${bounceTop3} 6s 1s infinite;

  @media screen and (max-width: 500px) {
    width: 25%;
  }
`;

export const ImageAnimation4 = styled.img.attrs({
  src: `${"https://img.icons8.com/doodle/480/000000/books.png"}`
})`
  /* border: 1px solid black; */
  width: 20%;
  animation: ${bounceTop4} 6s 1s infinite;

  @media screen and (max-width: 500px) {
    width: 15%;
  }
`;

export const ImageAnimation5 = styled.img.attrs({
  src: `${"https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/480/000000/external-woman-stay-home-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"}`
})`
  /* border: 1px solid red; */
  width: 27%;
  animation: ${bounceTop5} 6s 1s infinite;

  @media screen and (max-width: 500px) {
    width: 20%;
    margin-left: 20px;
  }
`;


export const ImageAnimation6 = styled.img.attrs({
  src: `${"https://img.icons8.com/bubbles/500/000000/books.png"}`
})`
  /* border: 1px solid green; */
  width: 25%;
  animation: ${bounceTop6} 6s 1s infinite;

  @media screen and (max-width: 500px) {
    width: 18%;
  }
`;


export const ImageAnimation7 = styled.img.attrs({
  src: `${"https://img.icons8.com/bubbles/500/000000/book-reading.png"}`
})`
  /* border: 1px solid black; */
  width: 20%;
  animation: ${bounceTop7} 6s 1s infinite;

  @media screen and (max-width: 500px) {
    width: 20%;
  }
`;

export const TextAndButtonContainer = styled.div`
  height: 35%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 500px) {
    height: 40%;
    justify-content: space-between;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 10px; */
  /* border: 1px solid black; */
  height: 200x;
  width: 100%;
`;

export const SectionThreeText = styled.div`
   /* border: 1px solid black; */
   font-size: 40px;
   font-weight: 600;
   text-align: center;

   @media screen and (max-width:500px) {
    font-size: 25px;
  }   
`;

export const SectionThreeTextBookDam1 = styled.div`
  display: none;

  @media screen and (max-width:500px) {
  display: block;
  font-size: 40px;
  margin-bottom: 10px;
  line-height: 0.5em;
  vertical-align: 0.5em;
  border-bottom: 0.3em solid;
  border-image: linear-gradient(#f6b73c, #4d9f0c) 30;
  border-image-slice: 1;
}   
`;

export const SectionThreeTextBookDam2 = styled.div`
  font-size: 40px;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width:500px) {
  display: none;
}   
`;

export const SectionThreeTextBookDam3 = styled.div`
  display: none;

  @media screen and (max-width:500px) {
  display: block;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
}   
`;

export const ButtonContainer = styled.div`
  /* border: 2px solid green; */
  width: 600px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media screen and (max-width: 500px) {
    height: 200px;
    flex-direction: column;
  } */
`;

const blink = keyframes`
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
`;

export const ButtonsInIntro = styled.button`
  width: 150px;
  height: 40px;
  /* border: 1px solid black; */
  margin: 10px;
  border-style: none;
  border-radius: 7px;
  font-size: 20px;
  background: #2cc05a;
  color:  black;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  cursor: pointer;
  text-align: center;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  animation: ${blink} 2s ease-out 5s 1;
`;

export const ButtonSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TakeTourButtonImage = styled.img.attrs({
  src: `${"https://img.icons8.com/fluency-systems-regular/500/000000/circle-around.png"}`
})`
  width: 18%;
  margin-right: 10px;
`;

export const LoginButtonImage = styled.img.attrs({
  src: `${"https://img.icons8.com/ios-filled/500/000000/login-rounded-right.png"}`
})`
  width: 16%;
  margin-right: 10px;
`;

export const SectionWrapperThree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  height: 750px;
`;

// export const ImageAnimation2 = styled.img.attrs({
//   src: `${"https://img.icons8.com/bubbles/500/000000/book.png"}`
// })`
//   /* border: 1px solid black; */
//   width: 30%;
//   animation: ${move} 2s 1s infinite;
// `;

