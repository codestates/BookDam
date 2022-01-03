import {
  SearchUserContainer,
  UserSearchInput,
  UserSearchBtn
} from "./UsersearchStyle"
export const Searchuser = () => {

  return (
    <>
    <SearchUserContainer>
      <UserSearchInput/>
      <UserSearchBtn>검색</UserSearchBtn>
    </SearchUserContainer>
    </>
  )
}