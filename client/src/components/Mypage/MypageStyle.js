import styled from 'styled-components';

export const MyPageWholeContainer = styled.div`
  padding-top: 50px;
  border: 1px solid black;
  overflow: hidden;
  position: relative;
  width: 100vw;

  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
  }  
`;

export const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  border: 1px solid black;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

// UserInfo 영역
export const UserInfoContainer = styled.div`
  display: flex;
  width: 970px;
  height: 90px;
  border: 1px solid skyblue;

  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
  }
`;

export const UserImgSection = styled.div`
  width: 90px;
  height: 100%;
  margin-left: 24px;
  margin-right: 15px;
  /* border: 1px solid black; */
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
  /* border: 1px solid blue; */
`;

export const NickNameFollowSection = styled.div`
  display: flex;
  width: 100% ;
  height: 55%;
  flex-direction: row;
  flex-wrap: nowrap;
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
  margin-left: 5px;
  /* border: 1px solid green; */
`;

export const FollowContainer = styled.div`
  display: flex;
  width: 180px;
  flex-direction: row;
  margin-left: 5px;
  /* border: 1px solid orange; */
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
  height: 30px;
  width: 970px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  padding-top: 10px;
  border: 1px solid blue;

  @media (max-width: 500px) {
  width: 100%;
  padding: 0;
  }
`;

// Article 영역 (목록)
export const ArticleListContainer = styled.ul`
  display: flex;
  width: 970px;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;
  border: 1px solid red;

  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
  }
`;

export const ArticleWrap = styled.li`
  width: 200px;
  height: 300px;
  /* width: 100px;
  height: 150px; */
  margin: 10px 20px 10px 20px;
  border: 1px solid black;

  @media (max-width: 500px) {
    width: 110px;
    height: 140px;
    margin: 27px;
  }
`;

export const Article = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

