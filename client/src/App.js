import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { IntroPage } from './pages/IntroPage/IntroPage';
import { FeedPage } from './pages/FeedPage/FeedPage';
import Header from './components/Header/Header';
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';
import MyPage from '../src/pages/MyPage/MyPage';

function App () {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <IntroPage />
          <Footer />
        </Route>
        <Route path='/mypage'>
          <MyPage />
        </Route>
        <Route exact path='/feedpage'>
          <FeedPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
