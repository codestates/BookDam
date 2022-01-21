import styled from 'styled-components';

export const MyPageWholeContainer = styled.div`
  padding-top: 80px;
  border-top: 1px solid #e9ecef;
  overflow: hidden;
  width: 100vw;
  height: 900px;
`;

export const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

// UserInfo 영역
export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 72%;
  height: 90px;
  margin: 0;
  padding: 0;
  background-color: white;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;

  @media (max-width: 500px) {
    width: 355px;
  }
`;

export const UserImgSection = styled.div`
  width: 100px;
  height: 100px;
  margin: 0;
  padding: 0;
  border-radius: 50%;

  @media (max-width: 500px) {
    width: 80px;
    height: 80px;
  }
`;

export const UserImage = styled.img`
  border: 1px solid #E6E6E6;
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

export const UserInfoSection = styled.div`
  display: flex;
  width: 300px;
  height: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-left: 25px;
`;

export const NickNameFollowSection = styled.div`
  display: flex;
  width: 100% ;
  height: 55%;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-bottom: 5px;
`;

export const NickName = styled.div`
  display: flex;
  width: 98%;
  font-size: 1.1rem;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  font-size: x-large;
  padding-left: 5px;
  font-weight: 500;

  @media (max-width: 500px) {
    font-size: larger;
  }
`;

export const FollowContainer = styled.div`
  display: flex;
  width: 98%;
  flex-direction: row;
  padding-left: 5px;
  font-size: medium;
  font-weight: 500;

  @media (max-width: 500px) {
    font-size: smaller;
  }
`;

export const Follow = styled.div`
  display: flex;
  flex-direction: row;
  width: 90px;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
`;

export const FollowCount = styled.span`
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  margin-left: 5px;
  font-weight: 600;
`;

export const Follower = styled.div`
  display: flex;
  width: 90px;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
`;

export const FollowerCount = styled.span`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 5px;
  font-weight: 600;
`;

export const UserModifyBtn = styled.button`
  width: 230px;
  height: 40%;
  background-color: #1dc078;
  color: white;
  cursor: pointer;
  
  @media (max-width: 500px) {
    cursor: none;
  }
`;


// Article 영역 (목록 제목)
export const ArticleListTitle = styled.div`
  height: 30px;
  width: 970px;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 500px) {
    width: 200px;
    font-size: small;
  }
`;

// Article 영역 (목록)
export const ArticleListContainer = styled.ul`
  display: flex;
  width: 75%;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: center;
  list-style-type: none;
  background-color: white;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  /* padding-inline-start: 40px;
  padding-inline-end: 0px; */

  >.nodata {
    margin-top: 50px;
    width: 647px;
    text-align: center;
    font-weight: 800;
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    width: 75%unset;
    > .nodata {
      margin: 10px 0 0 0;
      font-weight: 600;
      font-size: 18px;
    }
  }
`;

export const ArticleWrap = styled.li`
  width: 200px;
  height: 300px;
  margin: 15px;
  border-radius: 5px;
  box-shadow: 
  rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, 
  rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, 
  rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, 
  rgba(0, 0, 0, 0.06) 0px 2px 1px, 
  rgba(0, 0, 0, 0.09) 0px 4px 2px, 
  rgba(0, 0, 0, 0.09) 0px 8px 4px, 
  rgba(0, 0, 0, 0.09) 0px 16px 8px;

  @media (max-width: 500px) {
    width: 90px;
    height: 120px;
    margin: 20px 10px 0px 10px;
  }
`;

export const Article = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
`;
