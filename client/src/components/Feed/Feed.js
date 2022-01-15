import React, { useState } from 'react';
import styled from 'styled-components';
import { Searchuser } from '../Usersearch/Usersearch';
import { Followfeed } from '../Followfeed/Followfeed';
import data from '../../dummyfiles/dummyFeedList';

export const FeedPageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  border-top: 1px solid #e9ecef;

  `;

export const FeedContainer = styled.div`
display: flex;
flex-direction: row;
width: 970px;
align-items: flex-start;
justify-content: center;
@media screen and (max-width: 500px) {
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
}
`;

export const Feed = () => {
  const [followFeedList, setFollowFeedList] = useState(data);

  return (
    <>
      <FeedPageContainer>
        <FeedContainer>
          <Followfeed followFeedList={followFeedList} />
          <Searchuser setFollowFeedList={setFollowFeedList} />
        </FeedContainer>
      </FeedPageContainer>
    </>
  );
};
