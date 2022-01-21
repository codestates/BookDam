import React from 'react';
import {
  ShareWholeContainer,
  TypoSection,
  ShareTypoWrapper,
  ShareTypo,
  ShareIntroduction,
  SkillSection,
  FeatureGifWrapper,
  PhoneFrame
} from './ShareSlideStyle';
import iFrame from '../../../assets/images/phoneFrame.png';

export const ShareSlide = () => {
  return (
    <>
      <ShareWholeContainer>
        <SkillSection>
          <FeatureGifWrapper>
            <PhoneFrame src={iFrame} alt='' />
          </FeatureGifWrapper>
        </SkillSection>
        <TypoSection>
          <ShareTypoWrapper className='fadein'>
            <ShareTypo>
              <span className='underline'>
                <span>공유</span>
              </span>
            </ShareTypo>
          </ShareTypoWrapper>
          <ShareIntroduction>
            <div className='fadein'>
              좋은 글, 좋은 문장은 사람들과 공유하세요
            </div>
          </ShareIntroduction>
        </TypoSection>
      </ShareWholeContainer>
    </>
  );
};
