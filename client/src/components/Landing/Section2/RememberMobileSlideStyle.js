import styled from 'styled-components';

// 전체 컨테이너
export const RememberWholeContainer = styled.div`
  display: none;

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    height: 750px;
    width: 100%;
  } 
`;

// 문구 섹션
export const TypoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  margin: 0;
  padding: 0;
  /* border: 1px solid blue; */

  .fadein {
    /* font-size: 20px; */
    position: relative;
    overflow: hidden;
    animation: fadein 3s ease-in-out;
    animation-delay: 1s;
    -moz-animation: fadein 3s ease-in-out; /* Firefox */
    -webkit-animation: fadein 3s ease-in-out; /* Safari and Chrome */
    -o-animation: fadein 3s ease-in-out; /* Opera */
  }
    @keyframes fadein {
      0% {
      opacity: 0;
      transform: translateY(20px);
      }
      100% {
      opacity: 1;
      transform: none;
      }
    }
`;

// 타이포그래픽 랩퍼
export const RememberTypoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 150px;
  margin: 0;
  /* border: 1px solid red; */
`;

// 타이포
export const RememberTypo = styled.h1`
  width: 80%;
  max-width: 480px;
  /* margin: 1.6em 2em; */
  font-family: 'Playfair Display', serif;
  font-size: 4em;
  line-height: 1.4em;
  font-weight: 700;
  color: #333333;
  /* border: 1px solid orange; */
  
  .underline {
    line-height: 0.5em; /* Positive value. */
    vertical-align: 0.5em; /* Positive value. */
    border-bottom: .4em solid transparent;
    -moz-border-image: -moz-linear-gradient(left, #A8DBED 0%, #E291E6 100%);
    -webkit-border-image: -webkit-linear-gradient(left, #A8DBED 0%, #E291E6 100%);
    border-image: linear-gradient(to right, #A8DBED 0%, #E291E6 100%);
    border-image-slice: 1;
  }

  .underline span {
    vertical-align: -0.4em;
  }

  /* Highlight */
  *::selection {
    background: rgba(226,145,230,.2);
  }

  @media screen and (max-width: 650px) {
    width: 60%;
    font-size: 3em;
  }
`;

// 소개
export const RememberIntroduction = styled.div`
  width: 100%;

  @media screen and (max-width: 650px) {
    font-size: 0.8em;
  }
`;

// 기능 섹션
export const SkillSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* border: 1px solid green; */

  @media screen and (max-width: 650px) {
    
  }
`;

// 기능 시현 GIF
export const FeatureGifWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 250px;
  height: 500px;
  border-radius: 50px;
  /* border: 1px solid orange; */

  
`;

// 아이폰 목업 img
export const PhoneFrame = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
