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

  // 서버에 요청
  // const getFollowFeed = () => {
  //   Axios.get(`http://localhost:4000/article/${userInfo.id}`,
  //   {
  //     headers: { 'Contnet-Type': 'application/json' }
  //   })
  //   .then((data) => {
  //     setFollowFeedList(data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

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
