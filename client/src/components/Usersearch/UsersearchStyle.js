import styled from 'styled-components';

export const SearchUserContainer = styled.div`
height: 20px;
width: 150px;
border: 0.5px solid #5dc175;
`
export const UserSearchInput = styled.input.attrs({
  type: "text",
  placeholder: " 사용자 이름"
})`
text-align: left;
height: 90%;
border: 0px;
width: 65%;
float: left;
outline: none;
  &::placeholder {
    font-size: 10px;
  }
`
export const UserSearchBtn = styled.button`
height: 100%;
width: 25%;
border: 0px;
float: right;
font-size: 8px;
color: #ffffff;
background-color: #5dc175;
`
