import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route path='/feedpage'>
            <FeedPage />
          </Route>
          <Route path='/createPage'>
            <CreatePage />
          </Route>
          <Route path='/mypage'>
            <MyPage />
          </Route>
        </Switch>
      </HeaderContainer>
    </>
  );
}
