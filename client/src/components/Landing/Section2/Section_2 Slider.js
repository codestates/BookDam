import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import {
  Section2WholeContainer,
  StyledSwiper,
  StyledSlide
} from './Section_2 SliderStyle';
import { WriteSlide } from './WriteSlide';

SwiperCore.use([Navigation]);

export const SectionTwoSlider = () => {
  
  return (
    <>
      <Section2WholeContainer>
        <StyledSwiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation
          grabCursor={true}
        >
          <SwiperSlide>
            <StyledSlide>
              Slide 1
              <WriteSlide />
            </StyledSlide>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlide>
              Slide 2
            </StyledSlide>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlide>
              Slide 3
            </StyledSlide>
          </SwiperSlide>
        </StyledSwiper>
      </Section2WholeContainer>
    </>
  );
};