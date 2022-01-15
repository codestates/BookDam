import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import example from '../../assets/images/defaultUserImage.png';
import {
  UserPageContainer,
  UserInfoContainer,
  UserImgSection,
  UserImage,
  UserInfoSection,
  NickNameFollowSection,
  NickName,
  FollowContainer,
  Follow,
  FollowCount,
  Follower,
  FollowerCount,
  ArticleListTitle,
  ArticleListContainer,
  ArticleWrap,
  Article
} from './UserPageStyle';

export default function UserPage () {
  const location = useLocation();
  const followInfo = location.state.followInfo;

  console.log(location.state);
  return (
    <>
      <UserPageContainer>
        <UserInfoContainer>
          <UserImgSection>
            <UserImage src={example} />
          </UserImgSection>
          <UserInfoSection>
            <NickNameFollowSection>
              <NickName>{followInfo.userNickName}</NickName>
              <FollowContainer>
                <Follow>팔로우
                  <FollowCount>123</FollowCount>
                </Follow>
                <Follower>팔로워
                  <FollowerCount>225</FollowerCount>
                </Follower>
              </FollowContainer>
            </NickNameFollowSection>
            <>게시글 숫자 입력칸</>
          </UserInfoSection>
          <div>소개글 입력 칸</div>
        </UserInfoContainer>
        <ArticleListTitle>수집 목록</ArticleListTitle>
        <ArticleListContainer>

          <ArticleWrap>
            <Article />
          </ArticleWrap>
          <ArticleWrap>
            <Article />
          </ArticleWrap>
          <ArticleWrap>
            <Article />
          </ArticleWrap>
          <ArticleWrap>
            <Article />
          </ArticleWrap>
        </ArticleListContainer>

      </UserPageContainer>
    </>
  );
}
