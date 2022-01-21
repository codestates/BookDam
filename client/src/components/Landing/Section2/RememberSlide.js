import React from 'react';
import {
  RememberWholeContainer,
  TypoSection,
  RememberTypoWrapper,
  RememberTypo,
  RememberIntroduction,
  SkillSection,
  FeatureGifWrapper,
  PhoneFrame
} from './RememberSlideStyle';
import iFrame from '../../../assets/images/phoneFrame.png';

export const RememberSlide = () => {
  return (
    <>
      <RememberWholeContainer>
        <TypoSection>
          <RememberTypoWrapper className='fadein'>
            <RememberTypo>
              <span className='underline'>
                <span>회상</span>
              </span>
            </RememberTypo>
          </RememberTypoWrapper>
          <RememberIntroduction>
            <div className='fadein'>
              언제든 기록한 문장을 꺼내보세요
            </div>
          </RememberIntroduction>
        </TypoSection>
        <SkillSection>
          <FeatureGifWrapper>
            <PhoneFrame src={iFrame} alt='' />
          </FeatureGifWrapper>
        </SkillSection>
      </RememberWholeContainer>
    </>
  );
};
