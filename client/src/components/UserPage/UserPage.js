import React, { useState } from 'react';
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
  UserModifyBtn,
  ArticleListTitle,
  ArticleListContainer,
  ArticleWrap,
  Article
} from './UserPageStyle';

export default function UserPage () {



  return (
    <>
      <UserPageContainer>
        <UserInfoContainer>
          <UserImgSection>
            <UserImage src={example} />
          </UserImgSection>
          <UserInfoSection>
            <NickNameFollowSection>
              <NickName>닉네임</NickName>
              <FollowContainer>
                <Follow>팔로우
                  <FollowCount>123</FollowCount>
                </Follow>
                <Follower>팔로워
                  <FollowerCount>225</FollowerCount>
                </Follower>
              </FollowContainer>
            </NickNameFollowSection>
            <>여기에 뭐가 들어가야함?</>
          </UserInfoSection>
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
