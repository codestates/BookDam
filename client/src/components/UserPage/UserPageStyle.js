import styled from 'styled-components';

export const UserPageContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 15px;
  border: 1px solid black;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

// UserInfo 영역
export const UserInfoContainer = styled.div`
  display: flex;
  height: 90px;
  margin: 10px;
  padding: 5px;
  border: 1px solid skyblue;

  /* @media (max-width: 500px) {
    width: 480px;
    padding: 0;
  } */
`;

export const UserImgSection = styled.div`
  width: 90px;
  height: 100%;
  margin-left: 15px;
  margin-right: 15px;
  border: 1px solid black;
`;

export const UserImage = styled.img`
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
  border: 1px solid blue;
`;

export const NickNameFollowSection = styled.div`
  display: flex;
  width: 100% ;
  height: 55%;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 5px;
  border: 1px solid red;
`;

export const NickName = styled.div`
  display: flex;
  width: 100px;
  font-size: 1.1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 5px;
  border: 1px solid green;
`;

export const FollowContainer = styled.div`
  display: flex;
  width: 180px;
  flex-direction: row;
  margin-left: 5px;
  border: 1px solid orange;
`;

export const Follow = styled.div`
  display: flex;
  flex-direction: row;
  width: 90px;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  /* border: 1px solid yellow; */
`;

export const FollowCount = styled.span`
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  margin-left: 5px;
`;

export const Follower = styled.div`
  display: flex;
  width: 90px;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  /* border: 1px solid black; */
`;

export const FollowerCount = styled.span`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 5px;
`;

export const UserModifyBtn = styled.button`
  width: 100% ;
  height: 40%;
  border: 1px solid #12e272;
  border-radius: 5px;
  background-color: rgba(0,0,0,0);
  color: #12e272;
  padding: 0ch;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  
  @media (max-width: 500px) {
    cursor: none;
  }
`;

// Article 영역 (목록 제목)
export const ArticleListTitle = styled.div`
  height: 20px;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  padding: 5px;
  /* border: 1px solid black; */

    /* @media (max-width: 500px) {
    width: 480px;
    padding: 0;
  } */
`;

// Article 영역 (목록)
export const ArticleListContainer = styled.div`
  display: flex;
  height: 450px;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  margin-top: 3px;
  padding: 5px;
  /* border: 1px solid black; */

  /* @media (max-width: 500px) {
    width: 480px;
    padding: 0;
  } */
`;

export const ArticleWrap = styled.div`
  width: 100px;
  height: 120px;
  margin: 10px;
  border: 1px solid black;
`;

export const Article = styled.img`
  width: 100%;
  height: 100%;
`;
