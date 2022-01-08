import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { IntroPage } from './pages/IntroPage/IntroPage';
import { FeedPage } from './pages/FeedPage/FeedPage';
import MyPage from './pages/MyPage/MyPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App () {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <IntroPage />
          <Footer />
        </Route>
        <Header />
      </Switch>
    </>
  );
}

export default App;
