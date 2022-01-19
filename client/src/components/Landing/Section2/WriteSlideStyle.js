import styled, { createGlobalStyle} from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

// Write 전체 컨테이너
export const WriteWholeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: 750px;
  width: 100%;
  border: 2px solid grey;

  @media (max-width: 500px) {
    width: 100%;
  } 
`;

// 문구 섹션
export const TypoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 640px;
  border: 1px solid green;
`;

// Write 타이포그래픽 랩퍼
export const WriteTypoWrapper = styled.div`
  width: 400px;
  height: 150px;
  margin: 10px 0 30px 0;
  /* border: 1px solid grey; */
`;

// Write 타이포그래픽
export const WriteTypo = styled.h1`
  width: 80%;
  max-width: 480px;
  /* margin: 1.6em 2em; */
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
`;

// Write 소개
export const WriteIntroduction = styled.div`
  width: 400px;
  height: 100px;
  /* border: 1px solid grey; */

  .fadein {
    font-size: medium;
    position: relative;
    overflow: hidden;
    animation: fadein 3s ease-in-out;
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

// 기능 섹션
export const SkillSection = styled.div`
  display: flex;
  width: 340px;
  border: 1px solid green;
`;

// 기능 시현 GIF
export const SkillGIF = styled.div`

`;