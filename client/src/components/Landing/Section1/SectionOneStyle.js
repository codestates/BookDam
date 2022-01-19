import styled from 'styled-components';
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';


export const SwiperContainer = styled.div`
  font-family: "Noto Sans KR",sans-serif;
  background-color: rgb(0,110,20, 0.2);
  width: 100vw;
  height: 100%;
  text-align: center;
  > .title-container {
    margin-top: 130px;
  }
  > div > .subtitle {
    font-family: 'Do Hyeon', sans-serif;
    font-size: 20px;
    color: rgba(10, 95, 90, 0.6);
    margin: 40px 0 0 0;
  }
  > div > h1 {
    color: white;
    font-size: 80px;
    font-weight: 200;
    line-height: 24px;
    margin-top: 30px;
    margin-bottom: 30px;
    font-family: 'Black Han Sans', sans-serif;
  }
`
export const StyledSwiper = styled(Swiper)`
  display: flex;
  
  padding-top: 50px;
  padding-bottom: 50px;
`

export const SwiperWrapper = styled.div`
  border: 2px solid blue;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid whitesmoke;
  height: 50rem;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 200px;

  > .swiper-slide {

    background-position: center;
    background-size: cover;
    width: 260px;
    height: 380px;
    background: #fff;
    padding: 0%;
    -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #0006 );
    }

    > .imgBx {
      width: 260px;
    height: 380px;
      overflow: hidden;
    }
    > .imgBx > img {
      width: 260px;
    height: 380px;
      object-fit: cover;
    }
`





