import styled from 'styled-components';

export const UpperContainer = styled.div`
/* border: 1px solid; */
display: flex;
flex-direction: column;
justify-content: space-between;
height: 900px;
width: 250px;
margin: 26px 0px 0px 0px;
position: sticky;

@media screen and (max-width: 500px) {
  display: none;
}
`;

export const SearchUserContainer = styled.div`
height: 30px;
width: 100%;
margin-right: 15px;
border: 0.5px solid #e5e5e5;
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
font-size: 20px;
  &::placeholder {
    font-size: 15px;
  }
`;
export const UserSearchBtn = styled.button`
height: 100%;
width: 25%;
border: 0px;
float: right;
font-weight: 600;
font-size: 14px;
color: #000;
background-color: #e5e5e5;
cursor: pointer;
`;

export const UserSearchResultContainer = styled.ul`
  height: 200px;
  margin-top: 1px;
  margin-right: 32px;
  width: 100%;
  background-color: #ffffff;
  list-style-type: none;
  border: 1px solid whitesmoke;
  border-radius: 3px;
  padding-inline-start: 0px;
  z-index: 3;
  overflow: auto;
  > li {
    cursor: pointer;
    margin-top: 1px;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    font-size: 15px;
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
display: flex;
height: 20px;
width: 20px;
margin-right: 10px;

`;
export const UserSearchImage = styled.img`
height: 100%;
width: 100%;
`;

export const RecommendListContainer = styled.div`
width: 100%;
height: 450px;
margin: 0 0 2px 2px;
/* border: 1px solid; */
@media screen and (max-width: 500px) {
  display: none;
}
.Recommend {
  overflow: hidden;
  height: 32px;
  background-color: #fff;
  border: 0;
  }
`;
export const RecommendList = styled.div`
text-align: left;
margin-bottom: 2px;
`;
