import React from 'react';
import styled from 'styled-components';

import { Input, Button } from '../elements';

const CommentWrite = () => {
  return (
    <>
      <WriteWrap>
        <Input />
        <Button width="80px">작성</Button>
      </WriteWrap>
    </>
  );
};

const WriteWrap = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 980px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default CommentWrite;