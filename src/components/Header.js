import React from 'react';
import styled from 'styled-components';

import { Grid, Text, Button } from '../elements'
import { history } from '../redux/configStore';

const Header = (props) => {
  return (
    <HeaderWrap>
      <Text 
        _onClick={() => {
          history.replace('/');
        }}
        size="16px" 
        bold
      >
        북카페
      </Text>

      <ButtonWrap>
        <Button 
          text-size="16px" 
          _onClick={() => {
            history.replace('/login')
          }}
        >
          로그인
        </Button>
        <Button 
          text-size="16px"
          _onClick={() => {
            history.replace('/signup')
          }} 
        >
          회원가입
        </Button>
      </ButtonWrap>
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