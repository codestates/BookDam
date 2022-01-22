import styled from 'styled-components';
import share from '../../../assets/images/introgif/share.gif';

// Write 전체 컨테이너
export const ShareWholeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin: 0;
  padding: 0;
  height: 750px;
  width: 100%;
  /* border: 2px solid grey; */

  @media screen and (max-width: 650px) {
    display: none;
  } 
`;

// 문구 섹션
export const TypoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 570px;

  .fadein {
    position: relative;
    overflow: hidden;
    animation: fadein 3s ease-in-out;
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

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

// 타이포그래픽 랩퍼
export const ShareTypoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 150px;
  margin: 10px 0 30px 0;
  
  @media screen and (max-width: 650px) {
    align-items: center;
    justify-content: flex-start;
  }
`;

// 타이포
export const ShareTypo = styled.h1`
  width: 80%;
  max-width: 480px;
  font-family: 'Playfair Display', serif;
  font-size: 4em;
  line-height: 1.4em;
  font-weight: 700;
  color: #333333;
  
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
    font-size: 2.5em;
  }
`;

// 소개
export const ShareIntroduction = styled.div`
  width: 400px;

  @media screen and (max-width: 650px) {
    font-size: 0.8em;
  }
`;

// 기능 섹션
export const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 380px;
  margin-left: 60px;
  
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

// 기능 시현 GIF
export const FeatureGifWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 250px;
  height: 500px;
  border-radius: 40px;
  background-image: url(${share});
  background-size: 240px 490px;
  background-position-y: .6rem;
  background-position-x: .3rem;
  background-repeat: no-repeat;
`;

// 아이폰 목업 img
export const PhoneFrame = styled.img`
  width: 100%;
  height: 100%;
`;
