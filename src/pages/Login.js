import React, { useState } from 'react';
import styled from 'styled-components';
import UserInput from '../components/UserInput';

import { Text, Button, } from '../elements';

const Login = () => {

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <LoginWrap>
      <Text margin="0px 0px 48px 0px" size="48px" bold>로그인</Text>
      <ContentWrap>
        <Text margin="0px 0px 8px 0px">아이디</Text>
        <UserInput 
          _onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="아이디를 입력해주세요!" 
          margin="0px 0px 36px 0px"
          value={id} 
        />
        <Text margin="0px 0px 8px 0px">패스워드</Text>
        <UserInput 
          _onChange={(e) => {
            setPwd(e.target.value);
          }}
          placeholder="패스워드를 입력해주세요!" 
          margin="0px 0px 36px 0px" 
          value={pwd}
        />
      </ContentWrap>
      <ButtonWrap>
        <Button width="48%">로그인</Button>
        <Button width="48%">회원가입</Button>
      </ButtonWrap>
    </LoginWrap>
  );
};

const LoginWrap = styled.div`
  width: calc(100% - 520px);
  padding: 80px 40px;
  margin: 0 auto;
  text-align: center;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Login;