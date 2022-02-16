import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Text, Button } from '../elements'
import { history } from '../redux/configStore';
import { actionCreators as userActions } from '../redux/modules/user';
import { getCookie } from '../shared/Cookie';

const Header = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector(state => state.user.isLogin);

  return (
    <HeaderWrap>
      <Text 
        is_cursor
        _onClick={() => {
          history.replace('/');
        }}
        size="16px" 
        bold
      >
        북카페
      </Text>
      
      {!is_login ? 
        <ButtonWrap>
          <Button 
            margin="0px 10px 0px 0px"
            text-size="16px" 
            width="100px"
            _onClick={() => {
              history.replace('/login')
            }}
          >
            로그인
          </Button>
          <Button 
            text-size="16px"
            width="100px"
            _onClick={() => {
              history.replace('/signup')
            }} 
          >
            회원가입
          </Button>
        </ButtonWrap> :

        <ButtonWrap>
          <Button 
            text-size="16px" 
            _onClick={() => {
              dispatch(userActions.logOut());
              history.replace('/')
            }}
          >
            로그아웃
          </Button>
        </ButtonWrap>
      }
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

const ButtonWrap = styled.div`
  display: flex;
  min-width: 133px;
`;

export default Header;