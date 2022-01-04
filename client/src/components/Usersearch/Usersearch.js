import {
  SearchUserContainer,
  UserSearchInput,
  UserSearchBtn
} from "./UsersearchStyle"
import { useEffect, useState } from "react"
import Axios from "axios"
import data from "../../dummyfiles/dummyFeedList"

export const Searchuser = ({setFollowFeedList}) => {
  
  const [filter, setFilter] = useState([])

  const handlerInputSearchUser = (e) => {
    setFilter(e.target.value)
  }

  // useEffect(() => {
  //   console.log(filter)
  //   const getSearchUserFeedList = () => {
  //     Axios.get(`http://localhost:4000/user?name=${filter}`,
  //     {
  //       headers: { 'Contnet-Type': 'application/json' }
  //     })
  //     .then((data) => {
  //       setFollowFeedList(data)
  //     })
  //   }
  // }, [filter])

  const getSearchUserFeedList = (result) => {
      setFollowFeedList(result)
      console.log('?')
  }
  useEffect(() => {
    console.log(filter)
    const filterData = data.filter((el) => {
      return el.userNickName.indexOf(filter) > -1
        })
    getSearchUserFeedList(filterData)
  }, [filter])

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getSearchUserFeedList()
      console.log('검색 엔터 입력')
    }
  }

  return (
    <>
      <SearchUserContainer>
        <UserSearchInput value={filter} onChange={handlerInputSearchUser} onKeyPress={handleKeyPress}/>
        <UserSearchBtn onClick={getSearchUserFeedList}>검색</UserSearchBtn>
      </SearchUserContainer>
    </>
  )
}