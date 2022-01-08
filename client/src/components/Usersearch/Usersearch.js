import React, { useEffect, useState, useSelector } from 'react';
import {
  SearchUserContainer,
  UserSearchInput,
  UserSearchBtn,
  UpperContainer,
  UserSearchResultContainer,
  UserSearchResult,
  UserSearchImagebox,
  UserSearchImage
} from './UsersearchStyle';
import Axios from 'axios';
import data from '../../dummyfiles/dummyFeedList';
import { userSearchDummyData } from '../../dummyfiles/dummyUserSearch';
import userImage from '../../assets/images/defaultUserImage.png';

export const Searchuser = ({ setFollowFeedList }) => {
  const [filter, setFilter] = useState([]);
  const [hasInputValue, setHasInputValue] = useState(false);

  // const [searchUser, setSearchUser] = useState([])

  const handlerInputSearchUser = (e) => { // 인풋창에 입력된 값을 필터 상태에 넣어서 관리
    setFilter(e.target.value);
    e.target.value ? setHasInputValue(true) : setHasInputValue(false);
  };

  // const userInfoState = useSelector(state => state.userInfoReducer);
  // useEffect(() => {
  //   const getSearchUserFeedList = () => {
  //     Axios.get(`http://localhost:4000/${userInfo.id}?name=${filter}`,
  //     {
  //       headers: { 'Contnet-Type': 'application/json' }
  //     })
  //     .then((data) => {
  //       setFollowFeedList(data) // 이부분 삭제하고 새로운 함수에 유저정보 담아주는 태그 만들어야함
  //     })
  //   }
  // }, [filter])
  const callUserPage = () => {
    // 클릭시 userInfo.id === el.id => MyPage
    // else UserPage

  };
  const getSearchUserFeedList = (result) => {
    // setFollowFeedList(result);
  };
  // userInfo.id 와 userSearchDummyData[0].Follows.user_Id 가 일치할 때 filter에 입력된 유저는 내 팔로잉 대상이고
  // userSearchDummyData[0].Follows.follow_Id 를 조회해서 팔로우 추가 삭제 기능을 구현하면 된다.
  // 넘어오는 데이터 형태가 바껴서 브라켓 노테이션을 사용해야 한다.
  // userSearchDummyData[0]["Follows.user_Id"]
  // userSearchDummyData[0]["Follows.follow_Id"]

  // input에 입력된 값으로 유저닉네임을 조회해서 해당 값을 포함하는지 여부를 판단해서 filterData라는 변수에 할당함.
  // filterData에 담긴 값을 FeedList에 담아서 재랜더링 해준다.
  const filterData = data.filter((el) => {
    return el.userNickName.indexOf(filter) > -1;
  });
  console.log(filter);

  useEffect(() => {
    // setSearchUser()
    getSearchUserFeedList(filterData);
  }, [filter]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getSearchUserFeedList(); // 인자값이 없어서 엔터나 버튼클릭시 에러 발생
    }
  };

  console.log(hasInputValue);
  return (
    <>
      <UpperContainer>
        <SearchUserContainer>
          <UserSearchInput value={filter} onChange={handlerInputSearchUser} onKeyPress={handleKeyPress} />
          <UserSearchBtn onClick={getSearchUserFeedList}>검색</UserSearchBtn>
        </SearchUserContainer>
        {hasInputValue
          ? <UserSearchResultContainer>
            {filterData.slice(0, 9).map((el, index) => {
              return (
                <li key={index} onClick={callUserPage(el.id)}>
                  <UserSearchImagebox>
                    <UserSearchImage src={userImage} />
                  </UserSearchImagebox>
                  <div>{el.userNickName}</div>
                </li>
              );
            })}
          </UserSearchResultContainer>
          : null}
      </UpperContainer>
    </>
  );
};
