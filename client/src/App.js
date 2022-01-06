import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { IntroPage } from './pages/IntroPage/IntroPage';
import { FeedPage } from './pages/FeedPage/FeedPage';
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';
import MyPage from '../src/pages/MyPage/MyPage';

function App () {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Navbar />
          <IntroPage />
          <MyPage />
          <Footer />
        </Route>
        <Route exact path='/feedpage'>
          <FeedPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
