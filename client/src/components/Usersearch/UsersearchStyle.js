import styled from 'styled-components';

export const UpperContainer = styled.div`
height: 30px;
width: 100%;
margin: 0px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
`;
export const SearchUserContainer = styled.div`
height: 20px;
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
  background-color: #ffffff;
  list-style-type: none;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 3px;
  z-index: 3;
  margin: 0px;
  > li {

    &:hover {
      background-color: #eee;
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
`;
export const UserSearchImage = styled.img`
height: 100%;
width: 100%;
`;
