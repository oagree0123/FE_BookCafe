import React from 'react';
import styled from 'styled-components';

import { Input, Button, WriteInput } from '../elements';

const CommentWrite = () => {
  return (
    <>
      <WriteWrap>
        <CommentInput placeholder="댓글을 입력해주세요!" />
        <Button width="80px">작성</Button>
      </WriteWrap>
    </>
  );
};

const WriteWrap = styled.div`
  margin: 0 auto;
  margin-bottom: 12px;
  width: 100%;
  max-width: 980px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CommentInput = styled.input`
  padding: 0px 10px ;
  width: 100%;
  height: 42px;
  border: 1px solid #c9c9c9;
  border-radius: 20px;
  box-sizing: border-box;

  &:focus {
    border: 1px solid #c9c9c9;
    border-radius: 20px;
  }
`;

export default CommentWrite;