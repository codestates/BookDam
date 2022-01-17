import styled from 'styled-components';

export const MyPageWholeContainer = styled.div`
  /* padding-top: 50px; */
  border-top: 1px solid #e9ecef;
  overflow: hidden;
  position: relative;
  width: 100vw;
  /* background-color: whitesmoke; */

  @media (max-width: 500px) {
    width: 100%;
    /* padding-top: 5px; */
  }  
`;

export const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  /* border: 1px solid black; */

  @media (max-width: 500px) {
    width: 100%;
  }
`;

// UserInfo 영역
export const UserInfoContainer = styled.div`
  display: flex;
  width: 970px;
  height: 90px;
  padding: 20px 0 20px 0;
  background-color: white;
  /* border: 1px solid skyblue; */

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
  border: 1px solid #E6E6E6;
  border-radius: 50%;
  /* border: none; */
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
  flex-direction: column;
  flex-wrap: nowrap;
  margin-bottom: 5px;
  /* border: 1px solid red; */
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
  /* border: 1px solid green; */
`;

export const FollowContainer = styled.div`
  display: flex;
  width: 98%;
  flex-direction: row;
  padding-left: 5px;
  font-size: medium;
  font-weight: 500;
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
  font-weight: 600;
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
  font-weight: 600;
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
  /* padding-top: 10px; */
  /* border: 1px solid blue; */

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
  background-color: white;
  /* border: 1px solid red; */
  >.nodata {
    margin-top: 50px;
    width: 647px;
    text-align: center;
    font-weight: 800;
    font-size: 20px;
    /* border: 1px solid red; */
  }

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
  margin: 50px 20px 10px 20px;
  /* box-shadow:
    rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset; */
  border-radius: 5px;
    box-shadow: 
  rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, 
  rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, 
  rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, 
  rgba(0, 0, 0, 0.06) 0px 2px 1px, 
  rgba(0, 0, 0, 0.09) 0px 4px 2px, 
  rgba(0, 0, 0, 0.09) 0px 8px 4px, 
  rgba(0, 0, 0, 0.09) 0px 16px 8px;
  
  /* box-shadow: 
  rgba(0, 0, 0, 0.4) 0px 2px 4px, 
  rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, 
  rgba(0, 0, 0, 0.2) 0px -3px 0px inset; */
  /* box-shadow: -.5em 0 .1rem #adb5bd; */
  /* box-shadow: 5px 5px 3px 1px rgba(0, 0, 0, .2); */
  /* border: 1px solid black; */

  @media (max-width: 500px) {
    width: 110px;
    height: 140px;
    margin: 27px;
    /* box-shadow: -.3em 0 .1rem #adb5bd; */
  }
`;

export const Article = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
  
`;
