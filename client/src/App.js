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

  let cssRule= "font-size:2em;"
  let cssLogo1 ="color:#fff;" +"font-size: 60px;" +"font-weight: bold;" +"letter-space:-1px;" +"font-family:Tahoma,Arial,sans-serif;" +"background-color:#1dc078";
  if (window.console !== undefined) {
    setTimeout(console.log.bind(console,"%cBookDam", cssLogo1),0);
    setTimeout(console.log.bind(console,"%c당신이 고른 멋진 책, 멋진 문장을 기록하고 공유하세요",cssRule),0);
  }

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
