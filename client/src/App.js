import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedPage from '../src/pages/FeedPage';
import MyPage from '../src/pages/MyPage';

function App () {
  return (
    <>
      We are Second Wind
      <Switch>
        <Route exact path='/' />
        <Route path='/feedpage'>
          <FeedPage />
        </Route>
        <Route path='/mypage'>
          <MyPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
