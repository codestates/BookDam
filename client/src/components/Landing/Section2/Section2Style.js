import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

// 섹션2 전체 컨테이너
export const Section2WholeContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100vw;

  @media screen and (max-width: 500px) {
    width: 90%;
  } 
  > .swiper .swiper-wrapper .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

// 슬라이드 스와이퍼(부모)
export const StyledSwiper = styled(Swiper)`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 50px 0 50px 0;
  margin-bottom: 50px;
`;

// 슬라이드 (자식)
export const StyledSlide = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  color: blueviolet;
`;
