import React from 'react';
import Navbar from '../Navbar/Navbar';
import { HeaderContainer } from './HeaderStyle';
// import { CreatePage } from '../../pages/CreatePage/CreatePage';
// import { FeedPage } from '../../pages/FeedPage/FeedPage';
// import UserPage from '../../pages/UserPage/UserPage';
// import MyPage from '../../pages/MyPage/MyPage';
// import { EditPage } from '../../pages/EditPage/EditPage';
// import { IntroPage } from '../../pages/IntroPage/IntroPage';
// import Footer from '../../components/Footer/Footer';

export default function Header () {
  return (
    <>
      <HeaderContainer>
        <Navbar />
        {/* <Switch>
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
          <Route path='/'>
            <EditPage />
          </Route>
        </Switch> */}
      </HeaderContainer>
    </>
  );
}
