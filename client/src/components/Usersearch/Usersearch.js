import {
  SearchUserContainer,
  UserSearchInput,
  UserSearchBtn,
  UpperContainer

} from './UsersearchStyle';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import data from '../../dummyfiles/dummyFeedList';

export const Searchuser = ({ setFollowFeedList }) => {
  const [filter, setFilter] = useState([]);

  const handlerInputSearchUser = (e) => {
    setFilter(e.target.value);
  };

  // 유저 검색기능은 서버에서 데이터 처리가 어떻게 되는지에 따라 유형이 바뀌므로 추후 구현
  // 우선 더미데이터 상에서 필터 처리는 가능했음

  // useEffect(() => {
  //   console.log(filter)
  //   const getSearchUserFeedList = () => {
  //     Axios.get(`http://localhost:4000/${userInfo.id}?name=${filter}`,
  //     {
  //       headers: { 'Contnet-Type': 'application/json' }
  //     })
  //     .then((data) => {
  //       setFollowFeedList(data)
  //     })
  //   }
  // }, [filter])

  const getSearchUserFeedList = (result) => {
    setFollowFeedList(result);
  };

  useEffect(() => {
    // input에 입력된 값으로 유저닉네임을 조회해서 해당 값을 포함하는지 여부를 판단해서 filterData라는 변수에 할당함.
    const filterData = data.filter((el) => {
      return el.userNickName.indexOf(filter) > -1;
    });
    // filterData에 담긴 값을 FeedList에 담아서 재랜더링 해준다.
    getSearchUserFeedList(filterData);
  }, [filter]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getSearchUserFeedList(); // 인자값이 없어서 엔터나 버튼클릭시 에러 발생
    }
  };

  return (
    <>
      <UpperContainer>
        <SearchUserContainer>
          <UserSearchInput value={filter} onChange={handlerInputSearchUser} onKeyPress={handleKeyPress} />
          <UserSearchBtn onClick={getSearchUserFeedList}>검색</UserSearchBtn>
        </SearchUserContainer>
      </UpperContainer>
    </>
  );
};
