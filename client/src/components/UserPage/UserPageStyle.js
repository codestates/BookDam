import styled from 'styled-components';

export const UserPageWholeContainer = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e9ecef;
  overflow: hidden;
  position: relative;
  width: 100vw;
  /* background-color: whitesmoke; */

  @media (max-width: 500px) {
    width: 100vw;
    /* padding-top: 5px; */
  }  
`;

export const UserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  width: 970px;
  margin: 0px;
  
  /* border: 1px solid black; */
  
  @media (max-width: 500px) {
    width: 100%;
  }
  `;

// UserInfo 영역
export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 72%;
  height: 90px;
  margin: 0;
  padding: 0 0 0 80px;
  background-color: white;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  > .space {
    margin: 0 10px 0 10px;
    @media (max-width: 500px) {
      display: none;
    }

  }
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
  @media (max-width: 500px) {
    width: 70%;
  }
`;

export const NickNameFollowSection = styled.div`
  display: flex;
  width: 100% ;
  height: 55%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  margin-bottom: 5px;
  /* border: 1px solid red; */
  > .BtnContainer{
    width: 60px;
    /* border: 2px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > .BtnContainer div {
    color: rgba(10, 120, 220, 1);
  }
`;

export const NickName = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 900;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px;
  margin: 0px;
  /* border: 1px solid green; */
`;

export const FollowContainer = styled.div`
  display: flex;
  width: 200px;
  flex-direction: row;
  margin-left: 5px;
  /* border: 1px solid orange; */
  > strong {
    width: 30%
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
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  background-color: white;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-bottom: 20px;

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
    width: 100%;
    padding: 0px;
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
    margin: 20px 10px 0px 10px;
    /* box-shadow: -.3em 0 .1rem #adb5bd; */
  }
`;

export const Article = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
`;

export const UserFollowIcon = styled.button`
font-weight: 900;
height: 20px;
width: 60px;
padding: 0px;
border: 0;
border-radius: 2px;
font-size: 15px;
background-color: rgba(0,0,0,0);
transition: all 0.1s ease-out;
cursor: pointer;
> svg {
  margin-top: 2px;
}
:hover {
  font-size:16px;
}
@media screen and (max-width: 500px) {
  font-size: 10px;
  width: 50px;
}
`;
