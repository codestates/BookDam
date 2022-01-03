import React, { useState } from "react"
import { FeedContentContainer, 
  UserInfoContainer,
  UserInfo,
  UserNameAndImage,
  UserImageContainer,
  UserImage,
  DefaultUserImage,
  UserNickName,
  UserFollowIcon,
  PostCreatedAt,
  ContentsContainer,
  Sentence,
  Comment,
  BookInfo
} from "./FollowfeedStyle"
import userImage from "../../assets/images/defaultUserImage.png"

const usernickname = '민트초코깡'
const book_Title = "신데렐라", book_Author = "미상" , createdAt = '2022-01-01' , sentence = "백설공주가 독사과를 먹었어요. 백설공주가 독사과를 먹었어요. 백설공주가 독사과를 먹었어요. 백설공주가 독사과를 먹었어요.", comment = '남이 주는 건 함부로 먹으면 안되겠어요.'
const sentence2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
const getUserImage = 1
// 유저가 이미지 등록했으면 해당값을 리턴, 없으면 null리턴하는 함수

export const Followfeed = () => {

  return (
    <>
      <FeedContentContainer>
        <UserInfoContainer>
          <UserInfo>
            <UserNameAndImage>
              <UserImageContainer>
                {getUserImage ? <UserImage src={userImage}></UserImage>
                  : <DefaultUserImage src='https://cdn-icons-png.flaticon.com/512/14/14660.png'></DefaultUserImage> }
              </UserImageContainer>
              <UserNickName>
                {usernickname}
              </UserNickName>
              <UserFollowIcon/>
            </UserNameAndImage>
            <PostCreatedAt>
              {createdAt}
            </PostCreatedAt>
          </UserInfo>
          <ContentsContainer>
            <Sentence>{sentence2}</Sentence>
            <Comment>{comment}</Comment>
            <BookInfo>{book_Title} | {book_Author} </BookInfo>
          </ContentsContainer>
        </UserInfoContainer>

        <UserInfoContainer>
          <UserInfo>
            <UserNameAndImage>
              <UserImageContainer>
                {getUserImage ? <UserImage src={userImage}></UserImage>
                  : <DefaultUserImage src='https://cdn-icons-png.flaticon.com/512/14/14660.png'></DefaultUserImage> }
              </UserImageContainer>
              <UserNickName>
                {usernickname}
              </UserNickName>
            </UserNameAndImage>
            <PostCreatedAt>
              {createdAt}
            </PostCreatedAt>
          </UserInfo>
          <ContentsContainer>
            <Sentence>{sentence2}</Sentence>
            <Comment>{comment}</Comment>
            <BookInfo>{book_Title} | {book_Author} </BookInfo>
          </ContentsContainer>
        </UserInfoContainer>
        <UserInfoContainer>
          <UserInfo>
            <UserNameAndImage>
              <UserImageContainer>
                {getUserImage ? <UserImage src={userImage}></UserImage>
                  : <DefaultUserImage src='https://cdn-icons-png.flaticon.com/512/14/14660.png'></DefaultUserImage> }
              </UserImageContainer>
              <UserNickName>
                {usernickname}
              </UserNickName>
            </UserNameAndImage>
            <PostCreatedAt>
              {createdAt}
            </PostCreatedAt>
          </UserInfo>
          <ContentsContainer>
            <Sentence>{sentence}</Sentence>
            <Comment>{comment}</Comment>
            <BookInfo>{book_Title} | {book_Author} </BookInfo>
          </ContentsContainer>
        </UserInfoContainer>

        <UserInfoContainer>
          <UserInfo>
            <UserNameAndImage>
              <UserImageContainer>
                {getUserImage ? <UserImage src={userImage}></UserImage>
                  : <DefaultUserImage src='https://cdn-icons-png.flaticon.com/512/14/14660.png'></DefaultUserImage> }
              </UserImageContainer>
              <UserNickName>
                {usernickname}
              </UserNickName>
            </UserNameAndImage>
            <PostCreatedAt>
              {createdAt}
            </PostCreatedAt>
          </UserInfo>
          <ContentsContainer>
            <Sentence>{sentence}</Sentence>
            <Comment>{comment}</Comment>
            <BookInfo>{book_Title} | {book_Author} </BookInfo>
          </ContentsContainer>
        </UserInfoContainer>
      </FeedContentContainer>
    </>
  );
};