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
font-size: 8px;
color: #ffffff;
background-color: #5dc175;
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
  cursor: pointer;
  > li {
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
.Recommend {
  background-color: #fff;
  border: 0;
  }
`
export const RecommendList = styled.div`
text-align: left;
margin-bottom: 2px;
`