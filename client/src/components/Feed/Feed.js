import styled from 'styled-components';
import { useState } from 'react';
import { Searchuser } from '../Usersearch/Usersearch';
import { Followfeed } from '../Followfeed/Followfeed';
import data from '../../dummyfiles/dummyFeedList';

export const FeedContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Feed = () => {
  const [followFeedList, setFollowFeedList] = useState(data);

  /* 서버에 요청
  const getFollowFeed = () => {
    Axios.get(`http://localhost:4000/article/${userInfo.id}`,
    {
      headers: { 'Contnet-Type': 'application/json' }
    })
    .then((data) => {
      setFollowFeedList(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  */

  return (
    <>
      <FeedContainer>
        <Searchuser setFollowFeedList={setFollowFeedList} />
        <Followfeed followFeedList={followFeedList} />
      </FeedContainer>
    </>
  );
};