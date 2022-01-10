import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { HeaderContainer } from './HeaderStyle';
import { CreatePage } from '../../pages/CreatePage/CreatePage';
import { FeedPage } from '../../pages/FeedPage/FeedPage';
import UserPage from '../../pages/UserPage/UserPage';
import MyPage from '../../pages/MyPage/MyPage';
import { EditPage } from '../../pages/EditPage/EditPage';

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
          <Route path='/userPage'>
            <UserPage />
          </Route>
          <Route path='/editpage'>
            <EditPage />
          </Route>
        </Switch>
      </HeaderContainer>
    </>
  );
}
