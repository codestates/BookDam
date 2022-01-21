import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { IntroPage } from './pages/IntroPage/IntroPage';
import Footer from './components/Footer/Footer';
import { useDispatch } from 'react-redux'; // 로그인 상태변경용
import { GuestLoginAction, LoginAction } from './actions/UserInfoAction';
import { CreatePage } from './pages/CreatePage/CreatePage';
import { FeedPage } from './pages/FeedPage/FeedPage';
import UserPage from './pages/UserPage/UserPage';
import MyPage from './pages/MyPage/MyPage';
import { EditPage } from './pages/EditPage/EditPage';

function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem('logged'));
    if (userInfo && userInfo.userId !== 'guest') {
      dispatch(LoginAction(userInfo));
    } else if (userInfo && userInfo.userId === 'guest') {
      dispatch(GuestLoginAction(userInfo));
    }
  });

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <IntroPage />
          <Footer />
        </Route>
        <Route path='/feedPage'>
          <FeedPage />
        </Route>
        <Route path='/createPage'>
          <CreatePage />
        </Route>
        <Route path='/myPage'>
          <MyPage />
        </Route>
        <Route path='/userPage'>
          <UserPage />
        </Route>
        <Route path='/editPage'>
          <EditPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
