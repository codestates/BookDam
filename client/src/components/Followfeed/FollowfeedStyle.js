import styled from "styled-components";
import { FaUserPlus, FaUserAltSlash, FaUserCheck } from "react-icons/fa";

export const FeedContentContainer= styled.div`
display: flex;
align-items: center;
align-content: center;
flex-wrap: wrap;
border: 3px solid ;
`
export const UserInfoContainer= styled.div`
margin: 10px;
border: 1px solid black;
height: 400px;
width: 330px;
background-image: linear-gradient(rgba(0,170, 0, 0.1), rgba(0, 255, 0, 0.5));
`
export const UserInfo= styled.div`
margin: 5px;
display: flex;
justify-content: space-between;
`
export const UserImageContainer = styled.div`
height: 30px;
width: 30px;
background-color: white;
`
export const DefaultUserImage= styled.img`
height: 100%;
width: 100%;
`
export const UserNameAndImage = styled.div`
width: 50%;
display:flex;
flex-direction: row;
justify-content: left;
align-items: center;


`
export const UserImage= styled.img`
display: grid;
justify-items: center;
align-items: center;
height: 100%;
width: 100%;
`

export const UserNickName= styled.div`
display: grid;
justify-items: center;
align-items: center;
left: 10px;
margin-left: 10px;
`
export const UserFollowIcon = styled.div`
height: 15px;
width: 15px;
margin-left: 5px;
border: 1px solid black;
`
export const PostCreatedAt= styled.div`
margin-right: 10px;
font-size: 10px;
color: black;
display: flex;
justify-content: center;
align-items: center;
`
export const ContentsContainer = styled.div`
height: 95%;
width: 95%;
margin: 5px;
margin-top: 15px;
`
// !! 문장 가로세로 가운데 정렬 적용시키기!!!
export const Sentence = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 60%;
width: 100%;
border-radius: 15px;
background-color: whitesmoke;
overflow: auto;
`
export const Comment = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 20%;
width: 100%;
margin-top: 15px;
border-radius: 15px;
background-color: whitesmoke;
`
export const BookInfo = styled.div`
font-size: 9px;
padding: 3px;
`
