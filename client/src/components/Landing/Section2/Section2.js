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
import { WriteMobileSlide } from './WriteMobileSlide';
import { ShareSlide } from './ShareSlide';
import { ShareMobileSlide } from './ShareMobileSlide';
import { RememberSlide } from './RememberSlide';
import { RememberMobileSlide } from './RememberMobileSlide';

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
              <WriteMobileSlide />
            </StyledSlide>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlide>
              <ShareSlide />
              <ShareMobileSlide />
            </StyledSlide>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSlide>
              <RememberSlide />
              <RememberMobileSlide />
            </StyledSlide>
          </SwiperSlide>
        </StyledSwiper>
      </Section2WholeContainer>
    </>
  );
};
