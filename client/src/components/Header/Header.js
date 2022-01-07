import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { HeaderContainer } from './HeaderStyle';
import { CreatePage } from '../../pages/CreatePage/CreatePage';
import { FeedPage } from '../../pages/FeedPage/FeedPage';
import MyPage from '../../pages/MyPage/MyPage';

export default function Header () {
  return (
    <>
      <HeaderContainer>
        <Navbar />
          <Route exact path='/createPage'>
            <CreatePage />
          </Route>
          <Route exact path='/feedpage'>
            <FeedPage />
          </Route>
          <Route exact path='/mypage'>
            <MyPage />
          </Route>
      </HeaderContainer>
    </>
  );
}
