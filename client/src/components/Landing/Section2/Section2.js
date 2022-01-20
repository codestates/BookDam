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
} from './Section2Style';
import { WriteSlide } from './WriteSlide';
import { ShareSlide } from './ShareSlide';
import { RememberSlide } from './RememberSlide';

SwiperCore.use([Navigation]);

export const Section2 = () => {
  return (
    <>
      <Section2WholeContainer>
        <StyledSwiper
          slidesPerView={1}
          spaceBetween={30}
          loop
          grabCursor
          navigation
        >
          <SwiperSlide>
            <StyledSlide>
              <WriteSlide />
            </StyledSlide>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlide>
              <ShareSlide />
            </StyledSlide>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlide>
              <RememberSlide />
            </StyledSlide>
          </SwiperSlide>
        </StyledSwiper>
      </Section2WholeContainer>
    </>
  );
};
