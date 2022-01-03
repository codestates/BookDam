import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FeedPage from '../src/pages/FeedPage';
import MyPage from '../src/pages/MyPage';
import Footer from '../src/components/Footer/Footer';

function App () {
  return (
    <>
      <Header />
        
      <Switch>
        <Route exact path='/' />
        <Route path='/feedpage'>
          <FeedPage />
        </Route>
        <Route path='/mypage'>
          <MyPage />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
