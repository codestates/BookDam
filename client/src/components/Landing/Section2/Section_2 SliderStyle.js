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
  height: 750px;
  width: 100%;
  border: 2px solid yellow;

  @media (max-width: 500px) {
    width: 100%;
  } 
`;

// 슬라이드 스와이퍼(부모)
export const StyledSwiper = styled(Swiper)`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 970px;
  height: 100%;
  border: 1px solid blue;
`;

// 슬라이드 (자식)
export const StyledSlide = styled.div`
  text-align: center;
  font-size: 20px;
  color: blueviolet;
  border: 1px solid blueviolet;
`;
