import styled from 'styled-components';

export const UpperContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
height: 30px;
width: 100%;
margin: 0px;
`;

export const SearchUserContainer = styled.div`
height: 30px;
width: 150px;
margin-right: 15px;
border: 0.5px solid #5dc175;
`;
export const UserSearchInput = styled.input.attrs({
  type: 'text',
  placeholder: ' 사용자 이름'
})`
text-align: left;
height: 90%;
border: 0px;
width: 65%;
float: left;
outline: none;
font-size: 10px;
  &::placeholder {
    font-size: 10px;
  }
`;
export const UserSearchBtn = styled.button`
height: 100%;
width: 25%;
border: 0px;
float: right;
font-size: 8px;
color: #ffffff;
background-color: #5dc175;
`;

export const UserSearchResultContainer = styled.ul`
  margin-top: 1px;
  margin-right: 32px;
  width: 20%;
  background-color: #ffffff;
  list-style-type: none;
  border: 1px solid whitesmoke;
  border-radius: 3px;
  padding-inline-start: 0px;
  z-index: 3;
  cursor: pointer;
  > li {
    margin-top: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    font-size: 9px;
    color: grey;
    border: 0.5px solid #c4ffd6;
    border-radius: 3px;
    &:hover {
      background-color: #eee;
      color: black;
    }

    &.selected {
      background-color: #ebe5f9;
    }
  }
`;

export const UserSearchResult = styled.li`

`;

export const UserSearchImagebox = styled.div`
height: 20px;
width: 20px;
margin-right: 10px;

`;
export const UserSearchImage = styled.img`
height: 100%;
width: 100%;
`;
