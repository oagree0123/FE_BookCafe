import React, { useDebugValue, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import UserInput from '../components/UserInput';
import axios from 'axios';

import { Text, Button, } from '../elements';
import { actionCreators as userActions } from '../redux/modules/user';
import { idCheck, usernameCheck } from '../shared/common';

const Signup = (props) => {
  const {history} = props;
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd_check, setPwdCheck] = useState("");

  const signup = () => {
    if(id === "" || pwd === "" || nickname === "" || pwd_check === "") {
      window.alert("모두 입력해주세요!");
      return;
    }

    if(!idCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    if(!usernameCheck(nickname)) {
      window.alert("닉네임에는 기호가 없어야 합니다!");
      return;
    }

    if(pwd !== pwd_check) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!")
      return;
    }

    dispatch(userActions.signUpDB(id, pwd, nickname));
  }

  return (
    <SignupWrap>
      <Text margin="0px 0px 48px 0px" size="48px" bold>회원가입</Text>
      <ContentWrap>
        <Text margin="0px 0px 8px 0px">이메일</Text>
        <UserInput 
          _onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="이메일을 입력해주세요!" 
          margin="0px 0px 24px 0px"
          value={id} 
        />
        <Text margin="0px 0px 8px 0px">닉네임</Text>
        <UserInput 
          _onChange={(e) => {
            setNickname(e.target.value);
          }}
          placeholder="닉네임을 입력해주세요!" 
          margin="0px 0px 24px 0px" 
          value={nickname}
        />
        <Text margin="0px 0px 8px 0px">패스워드</Text>
        <UserInput 
          _onChange={(e) => {
            setPwd(e.target.value);
          }}
          placeholder="패스워드를 입력해주세요!" 
          margin="0px 0px 24px 0px" 
          value={pwd}
          type="password"
        />
        <Text margin="0px 0px 8px 0px">패스워드 확인</Text>
        <UserInput 
          _onChange={(e) => {
            setPwdCheck(e.target.value);
          }}
          placeholder="패스워드를 똑같이 입력해주세요!" 
          margin="0px 0px 24px 0px" 
          value={pwd_check}
          type="password"
        />
      </ContentWrap>
      <ButtonWrap>
        <Button 
          width="48%"
          _onClick={signup}
        >
          회원가입
        </Button>
        <Button 
          width="48%"
          _onClick={()=>{
            history.push('/');
          }}
        >
          취소
        </Button>
      </ButtonWrap>
    </SignupWrap>
  );
};

const SignupWrap = styled.div`
  width: calc(90% - 400px);
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

export default Signup;