import React from 'react';
import {
  WriteWholeContainer,
  TypoSection,
  WriteTypoWrapper,
  WriteTypo,
  WriteIntroduction,
  SkillSection,
  FeatureGifWrapper,
  PhoneFrame
} from './WriteSlideStyle';
import iFrame from '../../../assets/images/phoneFrame.png';

export const WriteSlide = () => {
  return (
    <>
      <WriteWholeContainer>
        <TypoSection>
          <WriteTypoWrapper className='fadein'>
            <WriteTypo>
              <span className='underline'>
                <span>기록</span>
              </span>
            </WriteTypo>
          </WriteTypoWrapper>
          <WriteIntroduction>
            <div className='fadein'>
              책에서 본 감명 깊은 문장을 기록하세요
            </div>
          </WriteIntroduction>
        </TypoSection>
        <SkillSection>
          <FeatureGifWrapper>
            <PhoneFrame src={iFrame} alt='' />
          </FeatureGifWrapper>
        </SkillSection>
      </WriteWholeContainer>
    </>
  );
};
