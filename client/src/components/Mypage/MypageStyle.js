import styled from 'styled-components';

export const MypageContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid black;
`;

// UserInfo 영역
export const UserInfoContainer = styled.div`
  display: flex;
  width: 50%;
  height: 90px;
  margin: 10px;
  padding: 5px;
  border: 1px solid black;
`;

export const UserImgSection = styled.div`
  display: flex;
  width: 90px;
  height: 100%;
  margin-right: 5px;
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
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
  border: 1px solid blue;
`;

export const NickNameFollowSection = styled.div`
  display: flex;
  width: 100% ;
  height: 55%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 5px;
  /* border: 1px solid red; */
`;

export const NickName = styled.div`
  display: flex;
  width: 100px;
  font-size: 1.1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid green;
`;

export const FollowContainer = styled.div`
  display: flex;
  width: 190px;
  flex-direction: row;
  margin-left: 4px;
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
  border: 1px solid yellow;
`;

export const FollowCount = styled.span`
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  margin-left: 5px;
`

export const Follower = styled.div`
  display: flex;
  width: 90px;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  border: 1px solid black;
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
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// Article 영역 (목록 제목)
export const ArticleListTitle = styled.div`
  height: 20px;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
`;

// Article 영역 (목록)
export const ArticleListContainer = styled.div`
  display: flex;
  height: 400px;
  width: 50%;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  margin-top: 5px;
  padding: 5px;
  border: 1px solid black;
`;

export const ArticleWrap = styled.div`
  width: 100px;
  height: 120px;
  margin: 3px;
  border: 1px solid black;
`;

export const Article = styled.img`
  width: 100%;
  height: 100%;
`;