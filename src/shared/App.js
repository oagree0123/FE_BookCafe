import './App.css';
import styled from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { history } from '../redux/configStore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../elements';
import PostList from '../pages/PostList';
import PostDetail from '../pages/PostDetail';
import Header from '../components/Header';
import PostWrite from '../pages/PostWrite';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { actionCreators as userActions } from '../redux/modules/user';

import jwt_decode from "jwt-decode";
import Mypage from '../pages/Mypage';

function App() {
  const dispatch = useDispatch();

  const is_session = sessionStorage.getItem('token');

  useEffect(() => {
    if(is_session) {
      dispatch(userActions.loginCheckDB());
    }
  }, [])

  return (
    <>
      <AppWrap>
        <Header/>
      </AppWrap>
      <ContentWrap>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />           
          <Route path="/login" exact component={Login} />           
          <Route path="/signup" exact component={Signup} />           
          <Route path="/write" exact component={PostWrite} />           
          <Route path="/write/:id" exact component={PostWrite} />           
          <Route path="/post/:id" exact component={PostDetail} />           
          <Route path="/user/:nickname" exact component={Mypage} />           
        </ConnectedRouter>
      </ContentWrap>
    </>
  );
}

const AppWrap = styled.div`
  margin: 0 auto;
  margin-bottom: 12px;
  padding: 0px 40px;
  max-width: 1100px;
  box-sizing: border-box;
`

const ContentWrap = styled.div`
  margin: 0 auto;
  padding: 0px 40px;
  max-width: 1100px;
  box-sizing: border-box;
`

export default App;
