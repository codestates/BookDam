import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { IntroPage } from './pages/IntroPage/IntroPage';
import { FeedPage } from './pages/FeedPage/FeedPage';

function App () {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <IntroPage />
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
