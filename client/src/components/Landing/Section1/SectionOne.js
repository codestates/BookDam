import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { SwiperContainer, StyledSwiper,SwiperWrapper } from './SectionOneStyle';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './index.css'
import { bookcover } from '../../../assets/images/bookcover/bookcover'

export const Section1 = () => {
  const onClickHandler = (e) => {
    // 클릭시 확대
  }
  SwiperCore.use([EffectCoverflow, Navigation, Pagination])

  const booklist = bookcover.map((el, index) => {
    return (
      <SwiperSlide index={index} onClick={() => onClickHandler(index)}>
        <div className="imgBx">
          <img src={el.src} alt=''/>
        </div>
      </SwiperSlide>
    )
  })

  return (
    <SwiperContainer>
      <div className="title-container">
        <div className='subtitle'>당신이 고른 멋진 책, 멋진 문장을 기록하고 공유하세요.</div>
        <h1>BookDam</h1>
      </div>
      <StyledSwiper
        effect={'coverflow'}
        grabCursor={true}              // 마우스 커서 그랩
        centeredSlides={true}          // true일 때, 슬라이드가 가운데로
        autoplay= {{                   // 자동넘김 기능
            "delay": 500,
            "disableOnInteraction": false,
        }}
        slidesPerView={"auto"}        // 한 번에 볼 수 있는 슬라이드 숫자
        coverflowEffect={{            // 커버플로우 이펙트 실행할 때 사용되는 매개변수들
            "rotate": 8,              // 회전률
            "stretch": 10,            // 슬라이드 사이 간격
            "depth": 80,             // 간격
            "modifier": 1,            // 이펙트 반복 횟수?
            "slideShadows": true,     // 슬라이드 그림자
          }}
        loop={true}                   // 무한반복
        pagination={{
            "el": '.swiper-pagination',   // 페이지네이션이 설정된 css 선택자나 html 요소
            // "type": 'fraction',
            "clickable": true,            // 클릭으로 슬라이드 넘기기 가능여부
        }}
        navigation={{
            "nextEl": '.swiper-button-next',
            "prevEl": '.swiper-button-prev',
        }}
      >
        <SwiperWrapper>
        
          {booklist}
        </SwiperWrapper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </StyledSwiper>
    </SwiperContainer>
  );
};