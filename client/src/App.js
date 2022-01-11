import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { IntroPage } from './pages/IntroPage/IntroPage';
import { FeedPage } from './pages/FeedPage/FeedPage';
import MyPage from './pages/MyPage/MyPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useDispatch } from 'react-redux'; // 로그인 상태변경용
import { LoginAction } from './actions/UserInfoAction';

function App () {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem('logged'));

  if (userInfo) {
    dispatch(LoginAction(userInfo));
  }

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
