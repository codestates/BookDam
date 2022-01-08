import styled from 'styled-components';

export const WriteWholeContainer = styled.div`
  padding-top: 50px;
  /* border: 1px solid black; */
  overflow: hidden;
  position: relative;
  height: 900px;
  width: 100vw;
`;

export const SearchBookWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid black;
  height: 30%;
`;

export const SearchBookContainer = styled.div`
  width: 970px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  /* border: 1px solid blue; */
`;

export const SearchBookInfoContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
`;

export const SearchBookInfoUpper = styled.div`
  width: 100%;
  height: 20%;
  /* border: 2px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  width: 80%;
  border: 3px solid #e5e5e5;
  height: 60%;
  display: flex;
  justify-content: center;
`;

export const SearchInputcontainer = styled.input`
  width: 100%;
  border: 1px solid #e5e5e5;
  outline: none;
`;

export const SearchClick = styled.div`
  width: 50px;
  /* border: 1px solid black; */
  height: 100%;
  text-align: center;
  line-height: 220%;
  background: #E6E6E6;
  pointer: cursor;
`;

export const SearchBookInfoLower = styled.div`
  width: 100%;
  height: 80%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBookTitleContainer = styled.div`
  width: 80%;
  height: 40%;
  border: 1px solid black;
`;

export const SearchBookAuthorContainer = styled.div`
  width: 80%;
  height: 40%;
  border: 1px solid black;
`;

export const SearchBookPublisherContainer = styled.div`
  width: 80%;
  height: 40%;
  border: 1px solid black;
`;

export const SearchBookImageContainer = styled.div`
  width: 40%;
  height: 100%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookThumbnailContainer = styled.div`
  margin: 0;
  width: 60%;
  height: 90%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  box-sizing: border-box;
`;

export const BookThumbnail = styled.img`
  width: 70%;
  margin: 0;
  @media screen and (max-width: 500px) {
    width: 120%
  }
`;

export const WriteArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  height: 40%;
`;

export const WriteArticleContainer = styled.div`
  width: 970px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
`;

export const WriteSentenceSection = styled.textarea.attrs({
  placeholder: '감동적인 문장을 기록하세요.'
})`
  margin: 10px;
  width: 80%;
  height: 35%;
  border: 1px solid black;
  padding: 20px;
  border-radius: 7px;
  font-size: 20px;
`;

export const WriteCommentSection = styled.textarea.attrs({
  placeholder: '문장에 대한 감상평을 남기세요.'
})`
  margin: 10px;
  width: 80%;
  height: 25%;
  border: 1px solid black;
  padding: 20px;
  border-radius: 7px;
  font-size: 20px;
`;

export const ArticleButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  height: 10%;
`;

export const ArticleButtonContainer = styled.div`
  width: 970px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid blue;
`;

export const ArticleButtonSection = styled.div`
  border: 1px solid red;
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  margin: 5px;
  /* border: 2px solid red; */
  width: 350px;
  height: 55px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonsInWrite = styled.button`
  width: 60px;
  height: 40px;
  margin: 10px;
  border-style: none;
  border-radius: 10px;
  font-size: 14px;
  background: #2cc05a;
  color: black;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  text-align: center;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  &:hover {
    color: #ffffff;
  }
  &:active {
    background: #2683C9;
  }
`;
