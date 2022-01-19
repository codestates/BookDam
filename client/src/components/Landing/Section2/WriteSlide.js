import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import {
  WriteWholeContainer,
  TypoSection,
  WriteTypoWrapper,
  WriteTypo,
  WriteIntroduction,
  SkillSection,
  SkillGIF,

} from './WriteSlideStyle';
// import { WriteTypo } from './WriteTypo';

SwiperCore.use([Navigation]);

export const WriteSlide = () => {
  
  return (
    <>
      <WriteWholeContainer>
        <TypoSection>
          <WriteTypoWrapper>
            <WriteTypo>
              <span className='underline'>
                <span>Write</span>
              </span>
            </WriteTypo>
          </WriteTypoWrapper>
          <WriteIntroduction>
            <div className='fadein'>
            책에서 본 감명 깊은 문장을 기록할 수 있습니다.
            </div>
          </WriteIntroduction>
        </TypoSection>

        <SkillSection>
          <SkillGIF />
        </SkillSection>
      </WriteWholeContainer>
    </>
  );
};